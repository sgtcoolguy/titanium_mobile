/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.titanium.map;

import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.KrollProxy;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;

@Kroll.proxy(parentModule = HyperloopModule.class)
public class HyperloopProxy extends KrollProxy implements InvocationHandler {

    /**
     * 
     */
    private static Map<Class<?>, Class<?>> BOX_TO_PRIMITIVES = new HashMap<Class<?>, Class<?>>();

    static {
        BOX_TO_PRIMITIVES.put(Boolean.class, boolean.class);
        BOX_TO_PRIMITIVES.put(Byte.class, byte.class);
        // BOX_TO_PRIMITIVES.put(Character.class, char.class);
        BOX_TO_PRIMITIVES.put(Double.class, double.class);
        BOX_TO_PRIMITIVES.put(Float.class, float.class);
        BOX_TO_PRIMITIVES.put(Integer.class, int.class);
        BOX_TO_PRIMITIVES.put(Long.class, long.class);
        BOX_TO_PRIMITIVES.put(Short.class, short.class);
    }

    private static final String TAG = "HyperloopProxy";

    private Object nativeObject;
    private String nativeClassName;
    private Class<?> clazz;
    private HashSet<String> overrides;

    public HyperloopProxy() {
        super();
    }

    // Handle creation options
    @SuppressWarnings("unchecked")
    // equivalent to iOS _initWithProperties
    @Override
    public void handleCreationDict(KrollDict options) {
        String className = options.getString("class");
        if (className == null) {
            Log.e(TAG, "Missing 'class' value");
            return;
        }
        this.nativeClassName = className;

        try {
            Class<?> c = Class.forName(className);
            if (c == null) {
                Log.e(TAG, "Class '" + className + "' not found");
                return;
            }

            this.clazz = c;

            if (this.clazz.isInterface()) {
                // Generate a java.lang.reflect.Proxy instance for this
                // interface
                this.nativeObject = Proxy.newProxyInstance(this.getClass().getClassLoader(),
                        new Class[] {
                                this.clazz
                }, this);

                Object[] args = (Object[]) options.get("args");
                HashMap<String, Object> overrides = (HashMap<String, Object>) args[0];
                this.overrides = new HashSet<String>(overrides.keySet());
            } else {

                // should we create an instance, or should we just hold onto the
                // class?
                boolean alloc = options.optBoolean("alloc", true);
                if (alloc) {
                    Object instance = null;

                    Object[] initArgs = (Object[]) options.get("args");
                    if (initArgs == null) {
                        initArgs = new Object[0];
                    }
                    Object[] convertedArgs = convertArgs(initArgs);
                    Constructor<?> cons = resolveConstructor(c, convertedArgs);
                    if (cons == null) {
                        Log.e(TAG,
                                "Unable to find matching constructor for class: " + className
                                        + ", args: " + convertedArgs);
                        return;
                    }

                    instance = cons.newInstance(convertedArgs);
                    this.setNativeObject(instance);

                    if (this.nativeObject == null) {
                        Log.e(TAG, "Object " + className + " could not be created");
                        return;
                    }
                }
            }
            // wipe some props before passing on
            options.remove("args");
            options.remove("class");

            super.handleCreationDict(options);
        } catch (ClassNotFoundException e) {
            Log.e(TAG, "Class '" + className + "' not found", e);
        } catch (InstantiationException e) {
            Log.e(TAG, "Unable to instantiate class '" + className + "'", e);
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Unable to access class '" + className + "'", e);
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Illegal arguments to instantiate class '" + className + "'", e);
        } catch (InvocationTargetException e) {
            Log.e(TAG, "Exception during instantiation of class '" + className + "'", e.getCause());
        }
    }

    /**
     * Convert the "raw" args we received to unwrap proxies down to the object
     * they hold.
     * 
     * @param initArgs
     * @return
     */
    private Object[] convertArgs(Object[] initArgs) {
        Object[] convertedArgs = new Object[initArgs.length];
        for (int i = 0; i < initArgs.length; i++) {
            convertedArgs[i] = convertArgument(initArgs[i]);
        }
        return convertedArgs;
    }

    /**
     * If the argument is a proxy, unwrapp the native object it holds.
     * 
     * @param object
     * @return
     */
    private Object convertArgument(Object object) {
        if (object == null) {
            return null;
        }
        // If it's a proxy, unwrap the native object we're wrapping
        if (HyperloopProxy.class.isAssignableFrom(object.getClass())) {
            return ((HyperloopProxy) object).nativeObject;
        }
        // TODO Convert other types? Maybe KrollDict?
        return object;
    }

    private Constructor resolveConstructor(Class<?> c, Object[] arguments) {
        int argCount = (arguments == null) ? 0 : arguments.length;
        // if no args, assume we want a no-arg constructor!
        if (argCount == 0) {
            try {
                return c.getConstructor();
            } catch (NoSuchMethodException e) {
                // TODO may be no no-arg constructor!
                e.printStackTrace();
            }
        }

        Constructor<?>[] constructors = c.getConstructors();
        if (constructors.length == 1) {
            return constructors[0];
        }

        List<Match<Constructor>> matches = new ArrayList<Match<Constructor>>();
        for (Constructor constructor : constructors) {
            Class<?>[] params = constructor.getParameterTypes();
            // TODO if varargs, check argCount >= (params.length - 1)
            if (params.length == argCount) {
                Match<Constructor> match = createMatch(constructor, params, arguments);
                if (match != null) {
                    // Shortcut if the distance is 0: That's an exact match...
                    if (match.isExact()) {
                        return match.method;
                    }
                    matches.add(match);
                }
            }
        }
        if (matches.isEmpty()) {
            // Log something?
            return null;
        }
        // Sort matches by distance (lowest wins)
        Collections.sort(matches);
        return matches.get(0).method;
    }

    /**
     * Given a class, method name and some arguments - can we find the intended
     * target method to call?
     * 
     * @param c
     * @param name
     * @param arguments
     * @param instanceMethod
     * @return
     */
    private Method resolveMethod(Class<?> c, String name, Object[] arguments,
            boolean instanceMethod) {
        int argCount = (arguments == null) ? 0 : arguments.length;
        // if no args, assume we want a no-arg constructor!
        if (argCount == 0) {
            try {
                return c.getMethod(name);
            } catch (NoSuchMethodException e) {
                // TODO may be no no-arg method by that name!
                e.printStackTrace();
            }
        }

        Method[] methods = c.getMethods();
        // TODO Filter by instance/static first?
        if (methods.length == 1) {
            return methods[0];
        }

        List<Match<Method>> matches = new ArrayList<Match<Method>>();
        for (Method method : methods) {
            if (!method.getName().equals(name)) {
                continue;
            }
            Class<?>[] params = method.getParameterTypes();
            // TODO if varargs, check argCount >= (params.length - 1)
            if (params.length == argCount) {
                Match<Method> match = createMatch(method, params, arguments);
                if (match != null) {
                    // Shortcut if the distance is 0: That's an exact match...
                    if (match.isExact()) {
                        return match.method;
                    }
                    matches.add(match);
                }
            }
        }
        if (matches.isEmpty()) {
            // Log something?
            return null;
        }
        // Sort matches by distance (lowest wins)
        Collections.sort(matches);
        return matches.get(0).method;
    }

    /**
     * Determines if the method is a match. If not, this will return null. If it
     * is, returns a Match object holding the method and the distance of the
     * match.
     * 
     * @param m
     * @param params
     * @param arguments
     * @return
     */
    private <T> Match<T> createMatch(T m, Class<?>[] params, Object[] arguments) {
        int distance = Match.EXACT; // start as exact, increasing as we get
                                    // further
        for (int i = 0; i < params.length; i++) {
            Object arg = arguments[i];
            Class<?> param = params[i];
            if (arg == null) {
                // can't have a null primitive arg, no match
                if (param.isPrimitive()) {
                    return null;
                }
                // if null arg for a non-primitive, assume no distance change
            } else {
                int argDistance = distance(params[i], arguments[i].getClass());
                if (argDistance >= 0) {
                    distance += argDistance;
                } else {
                    // can't convert, no match
                    return null;
                }
            }
        }
        return new Match<T>(m, distance);
    }

    /**
     * Determine the distance between the argument types and the intended
     * parameter types. Returns -1 if no match.
     * 
     * @param target
     * @param argument
     * @return
     */
    private int distance(Class<?> target, Class<?> argument) {
        // Primitives - we always have a boxed type for our argument
        if (target.isPrimitive()) {
            // https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html#jls-5.3
            // Says we can do primitive widening, as per:
            // http://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html#jls-5.1.2
            // Widening

            // TODO How does the V8/Kroll layer convert numbers? This may lose
            // precision about the underlying type we want to use. Will we need
            // to provide a way
            // to explicitly "cast" an arg for callers?
            // It looks like it converts to int or double...
            if (byte.class.equals(target)) {
                if (Byte.class.equals(argument)) { // signed 8-bit
                    return Match.EXACT;
                }
                if (Short.class.equals(argument)) { // signed 16-bit
                    return 1;
                }
                if (Integer.class.equals(argument)) {
                    return 3;
                }
                if (Long.class.equals(argument)) {
                    return 4;
                }
                if (Float.class.equals(argument)) {
                    return 5;
                }
                if (Double.class.equals(argument)) {
                    return 6;
                }
            }
            if (short.class.equals(target)) {
                if (Short.class.equals(argument)) { // signed 16-bit
                    return Match.EXACT;
                }
                if (Integer.class.equals(argument)) {
                    return 1;
                }
                if (Long.class.equals(argument)) {
                    return 2;
                }
                if (Float.class.equals(argument)) {
                    return 3;
                }
                if (Double.class.equals(argument)) {
                    return 4;
                }
            }
            if (int.class.equals(target)) {
                if (Integer.class.equals(argument)) {
                    return Match.EXACT;
                }
                if (Long.class.equals(argument)) {
                    return 1;
                }
                if (Float.class.equals(argument)) {
                    return 2;
                }
                if (Double.class.equals(argument)) {
                    return 3;
                }
            }
            if (long.class.equals(target)) {
                if (Long.class.equals(argument)) {
                    return Match.EXACT;
                }
                if (Float.class.equals(argument)) {
                    return 1;
                }
                if (Double.class.equals(argument)) {
                    return 2;
                }
            }
            if (float.class.equals(target)) {
                if (Float.class.equals(argument)) {
                    return Match.EXACT;
                }
                if (Double.class.equals(argument)) {
                    return 1;
                }
            }
            if (double.class.equals(target) && Double.class.equals(argument)) {
                return Match.EXACT;
            }
            if (boolean.class.equals(target) && Boolean.class.equals(argument)) {
                return Match.EXACT;
            }
            return Match.NO_MATCH;
        }

        // Non-primitives
        if (!target.isAssignableFrom(argument)) {
            return Match.NO_MATCH;
        }

        // How far are the two types in the type hierarchy?
        return 100 * hops(argument, target, 0);
    }

    /**
     * Try to use recursion to determine how many types away in the type
     * hierarchy the target type is.
     * 
     * @param src
     * @param target
     * @param hops
     * @return
     */
    private int hops(Class<?> src, Class<?> target, int hops) {
        if (src == null) {
            return -1; // end of recursion, no parent type!
        }

        // they're the same class, no hops up the hierarchy
        if (target.equals(src)) {
            return hops;
        }

        // Take the least hops of traversing the parent type...
        int result = hops(src.getSuperclass(), target, hops + 1);

        // or the interfaces...
        Class<?>[] interfaces = src.getInterfaces();
        if (interfaces != null && interfaces.length > 0) {
            for (int i = 0; i < interfaces.length; i++) {
                int interfaceHops = hops(interfaces[i], target, hops + 1);
                if (interfaceHops > -1 && interfaceHops < result) {
                    // match up the interface hierarchy
                    result = interfaceHops;
                }
            }
        }
        return result;
    }

    @Kroll.method
    public Object callNativeFunction(Object[] args) {
        // Expect a single "dictionary"/js object as arg
        KrollDict dict;
        if (args[0] instanceof KrollDict) {
            dict = (KrollDict) args[0];
        } else {
            dict = new KrollDict((HashMap) args[0]);
        }

        String functionCall = dict.getString("func");
        if (functionCall == null) {
            Log.e(TAG, "'func' cannot be null");
            return null;
        }

        Object[] functionArguments = (Object[]) dict.get("args");
        if (functionArguments == null) {
            functionArguments = new Object[0];
        }

        // assume instance methods. Does this even matter?
        boolean isInstanceMethod = dict.optBoolean("isInstanceMethod", true);

        Object result = this.invokeMethod(functionCall, functionArguments,
                isInstanceMethod);
        return wrapIfNecessary(result);
    }

    @Kroll.method
    public Object getNativeField(Object[] args) {
        // Expect a single "dictionary"/js object as arg
        KrollDict dict;
        if (args[0] instanceof KrollDict) {
            dict = (KrollDict) args[0];
        } else {
            dict = new KrollDict((HashMap) args[0]);
        }

        String fieldName = dict.getString("field");
        Field f = getField(fieldName);
        if (f == null) {
            return null;
        }

        try {
            Object result = f.get(this.nativeObject);
            return wrapIfNecessary(result);
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Unable to access field: " + f.toString(), e);
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Receiving object is not an instance of the declaring type for field: "
                    + f.toString(), e);
        }
        return null;
    }

    @Kroll.method
    public void setNativeField(Object[] args) {
        // Expect a single "dictionary"/js object as arg
        KrollDict dict;
        if (args[0] instanceof KrollDict) {
            dict = (KrollDict) args[0];
        } else {
            dict = new KrollDict((HashMap) args[0]);
        }

        String fieldName = dict.getString("field");
        Field f = getField(fieldName);
        if (f == null) {
            return;
        }

        Object newValue = dict.get("value");
        try {
            f.set(this.nativeObject, newValue);
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Unable to access field: " + f.toString(), e);
        } catch (IllegalArgumentException e) {
            Log.e(TAG,
                    "Receiving object not an instance of declaring type, or failed to box/unbox primitive for field: "
                            + f.toString(),
                    e);
        }
    }

    private Field getField(String fieldName) {
        if (fieldName == null) {
            Log.e(TAG, "'field' cannot be null");
            return null;
        }

        // Access the field
        Class<?> c;
        if (this.nativeObject == null) {
            c = clazz;
        } else {
            c = this.nativeObject.getClass();
        }

        try {
            return c.getField(fieldName);
        } catch (NoSuchFieldException e) {
            Log.e(TAG, "No such field: Class: " + getApiName() + ", field name: "
                    + fieldName, e);
            return null;
        }
    }

    /**
     * Wraps a return value in a proxy if necessary. if it's already a proxy or
     * primitive, the framework will convert to JS for us.
     * 
     * @param result
     * @return
     */
    private Object wrapIfNecessary(Object result) {
        if (result == null) {
            return null;
        }

        // is it a primitive, String or proxy already?
        if (isKnownType(result)) {
            // is it the same object this proxy holds? Return this proxy then
            if (this.nativeObject != null
                    && result.getClass().getCanonicalName().equals(this.nativeClassName)
                    && result.equals(this.nativeObject)) {
                return this;
            }
            return result;
        }

        // TODO Is this stuff necessary? I assume Kroll will convert arrays and
        // map already?
        // I think we just need to ensure we wrap any "unknown" types in proxies
        // first?
        if (result.getClass().isArray()) {
            return javaArrayToJSArray(this, result);
        }
        if (Map.class.isAssignableFrom(result.getClass())) {
            return HyperloopMapToJSDictionary(this, result);
        }

        // Wrap in proxy
        HyperloopProxy p = new HyperloopProxy();
        p.setNativeObject(result);
        return p;
    }

    private HashMap<Object, Object> HyperloopMapToJSDictionary(HyperloopProxy proxy,
            Object result) {
        HashMap<Object, Object> newDict = new HashMap<Object, Object>();
        Map<Object, Object> map = (Map<Object, Object>) result;
        for (Object key : map.keySet()) {
            Object each = map.get(key);

            if (isKnownType(each)) {
                newDict.put(key, each);
            } else {
                if (each.getClass().isArray()) {
                    newDict.put(key, javaArrayToJSArray(proxy, each));
                } else if (Map.class.isAssignableFrom(each.getClass())) {
                    newDict.put(key, HyperloopMapToJSDictionary(proxy, each));
                } else {
                    HyperloopProxy p = new HyperloopProxy();
                    p.setNativeObject(each);
                    newDict.put(key, p);
                }
            }
        }
        return newDict;
    }

    private Object[] javaArrayToJSArray(HyperloopProxy proxy, Object result) {
        int length = Array.getLength(result);
        Object[] newArray = new Object[length];
        for (int index = 0; index < length; index++) {
            Object each = Array.get(result, index);
            if (isKnownType(each)) {
                newArray[index] = each;
            } else {
                if (each.getClass().isArray()) {
                    newArray[index] = javaArrayToJSArray(proxy, each);
                } else if (Map.class.isAssignableFrom(each.getClass())) {
                    newArray[index] = HyperloopMapToJSDictionary(proxy, each);
                } else {
                    HyperloopProxy p = new HyperloopProxy();
                    p.setNativeObject(each);
                    newArray[index] = p;
                }
            }
        }
        return newArray;
    }

    /**
     * Is this item a type that the JS engine can handle/convert on it's own? if
     * so, we don't need to worry about converting it by wrapping with a proxy.
     * Also we've whitelisted that it's ok to return.
     * 
     * @param item
     * @return
     */
    private boolean isKnownType(Object item) {
        if (item == null)
            return true;
        Class<?> klass = item.getClass();
        if (BOX_TO_PRIMITIVES.containsKey(klass)) {
            return true;
        }
        if (klass == String.class)
            return true;
        if (KrollProxy.class.isAssignableFrom(klass))
            return true;

        return false;
    }

    public void setNativeObject(Object nativeObject) {
        this.nativeObject = nativeObject;
        if (nativeObject == null) {
            this.nativeClassName = "null";
        } else {
            this.nativeClassName = nativeObject.getClass().getCanonicalName();
        }
    }

    @Kroll.method
    @Kroll.getProperty
    public String getApiName() {
        return nativeClassName;
    }

    private Object invokeMethod(String methodName, Object[] args,
            boolean instanceMethod) {
        Object[] convertedArgs = convertArgs(args);
        Object receiver;
        Class<?> c;
        if (!instanceMethod || this.nativeObject == null) {
            c = clazz;
            receiver = null;
        } else {
            receiver = this.nativeObject;
            c = this.nativeObject.getClass();
        }

        Method m = resolveMethod(c, methodName, convertedArgs, instanceMethod);
        if (m == null) {
            Log.e(TAG, "Unable to resolve method call. Class: " + getApiName() + ", method name: "
                    + methodName
                    + ", args: " + args);
            return null;
        }
        try {
            return m.invoke(receiver, convertedArgs);
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Unable to access method: " + m.toString(), e);
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Bad argument for method: " + m.toString() + ", args: " + args, e);
        } catch (InvocationTargetException e) {
            Log.e(TAG, "Exception thrown during invocation of method: " + m.toString() + ", args: "
                    + args,
                    e.getCause());
        }
        return null;
    }

    /**
     * Represents a Method match. Holds the method that matched along with an
     * integer representing how close or distant the match is. Lower distance ==
     * better match.
     * 
     * @author cwilliams
     */
    private static class Match<T> implements Comparable<Match<T>> {

        public static final int NO_MATCH = -1;
        public static final int EXACT = 0;

        public int distance;
        public T method;

        Match(T m, int dist) {
            this.distance = dist;
            this.method = m;
        }

        public boolean isExact() {
            return distance == EXACT;
        }

        @Override
        public int compareTo(Match<T> another) {
            return distance - another.distance;
        }
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        if (!overrides.contains(method.getName())) {
            // no such method!
            return null;
        }

        return getKrollObject().callProperty(method.getName(), args);
    }
}
