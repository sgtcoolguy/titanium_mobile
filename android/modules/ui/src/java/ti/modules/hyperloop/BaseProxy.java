/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.titanium.proxy.TiViewProxy;
import org.appcelerator.titanium.view.TiUIView;

import android.app.Activity;

/**
 * This is the base class for all the various types of hyperloop proxies.
 * Subclasses handle dealing with whether we're wrapping a class, an instance of
 * a class, an interface, or a dynamic subclass.
 * 
 * @author cwilliams
 */
@Kroll.proxy(parentModule = HyperloopModule.class)
public abstract class BaseProxy extends TiViewProxy {

    protected static final String TAG = "HyperloopProxy";

    protected Class<?> clazz;

    protected BaseProxy(Class<?> clazz) {
        super();
        this.clazz = clazz;
    }

    /**
     * Get the item we're wrapping. This will be a class for proxies
     * representing a Java class. For an instance of a class, this will be the
     * object. For interfaces, this will be the java.lang.reflect.Proxy instance
     * that proxies calls for the interface. For dynamic subclass types, it will
     * be the generated class (generated at runtime by dexmaker). For instances
     * of dynamic subclasses, it will be the actual instance/object.
     * 
     * @return
     */
    public abstract Object getWrappedObject();

    @Kroll.method
    @Kroll.getProperty
    @Override
    public String getApiName() {
        return clazz.getName();
    }

    @Kroll.getProperty
    public boolean getIsNativeProxy() {
        return true;
    }

    @Override
    public TiUIView createView(Activity activity) {
        // only instance proxy should override to generate a view for UI
        // elements
        return null;
    }

    @Kroll.method
    public Object callNativeFunction(Object[] args) {
        KrollDict dict = HyperloopModule.argsToDict(args);

        String functionCall = dict.getString("func");
        if (functionCall == null) {
            Log.e(TAG, "'func' cannot be null");
            return null;
        }

        Object[] functionArguments = (Object[]) dict.get("args");
        if (functionArguments == null) {
            functionArguments = new Object[0];
        }

        // assume instance methods. Flag really matters for proxies of classes
        // (no instance/alloc) where we're calling static methods!
        boolean isInstanceMethod = dict.optBoolean("instanceMethod", true);
        Object result = invokeMethod(functionCall, functionArguments,
                isInstanceMethod);
        return HyperloopUtil.wrap(result);
    }

    private Object invokeMethod(String methodName, Object[] args,
            boolean instanceMethod) {
        Object[] convertedArgs = HyperloopUtil.unwrapArguments(args);
        Object receiver;
        Class<?> c;
        if (!instanceMethod || getWrappedObject() == null) {
            c = clazz;
            receiver = null;
        } else {
            receiver = getWrappedObject();
            c = receiver.getClass();
        }

        Method m = HyperloopUtil.resolveMethod(c, methodName, convertedArgs, instanceMethod);
        if (m == null) {
            Log.e(TAG, "Unable to resolve method call. Class: " + getApiName() + ", method name: "
                    + methodName
                    + ", args: " + HyperloopUtil.stringify(args));
            return null;
        }
        m.setAccessible(true); // should offer perf boost since doesn't have to
                               // check security
        try {
            return m.invoke(receiver,
                    HyperloopUtil.convert(convertedArgs, m.getParameterTypes(), m.isVarArgs()));
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Unable to access method: " + m.toString(), e);
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Bad argument for method: " + m.toString() + ", args: "
                    + HyperloopUtil.stringify(convertedArgs), e);
        } catch (InvocationTargetException e) {
            Log.e(TAG, "Exception thrown during invocation of method: " + m.toString()
                    + ", args: "
                    + HyperloopUtil.stringify(convertedArgs),
                    e.getCause());
        }
        return null;
    }

    @Kroll.method
    public void setNativeField(Object[] args) {
        // Expect a single "dictionary"/js object as arg
        KrollDict dict = HyperloopModule.argsToDict(args);

        String fieldName = dict.getString("field");
        Field f = getField(fieldName);
        if (f == null) {
            return;
        }

        Object newValue = dict.get("value");
        newValue = HyperloopUtil.unwrap(newValue);
        newValue = HyperloopUtil.convertTo(newValue, f.getType());
        try {
            f.setAccessible(true); // should offer perf boost since doesn't have
                                   // to check security
            f.set(getWrappedObject(), newValue);
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
        try {
            return clazz.getField(fieldName);
        } catch (NoSuchFieldException e) {
            Log.e(TAG, "No such field: Class: " + getApiName() + ", field name: "
                    + fieldName, e);
            return null;
        }
    }

}
