/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import org.appcelerator.kroll.KrollProxy;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;

/**
 * Represents a proxy that wraps a class.
 * 
 * @author cwilliams
 */
@Kroll.proxy(parentModule = HyperloopModule.class)
public class ClassProxy extends BaseProxy {

    public ClassProxy(Class<?> clazz) {
        super(clazz);
    }

    @Override
    public Object getWrappedObject() {
        return this.clazz;
    }

    @Kroll.getProperty
    public boolean getIsClassProxy() {
        return true;
    }

    @Kroll.method
    public BaseProxy newInstance(Object[] initArgs) {
        if (initArgs == null) {
            initArgs = new Object[0];
        }
        final String className = clazz.getName();
        try {
            // FIXME Refactor, since this is in HyperloopModule too!
            Object[] convertedArgs = HyperloopUtil.unwrapArguments(initArgs);
            // If we get a single Titanium proxy, that's not a dynamic
            // hyperloop one (think ActivityProxy, or ButtonProxy)
            // Let's re-wrap the native object with a hyperloop proxy
            if (convertedArgs.length == 1 && convertedArgs[0] != null
                    && clazz.isAssignableFrom(convertedArgs[0].getClass())
                    && initArgs[0] instanceof KrollProxy
                    && !(initArgs[0] instanceof BaseProxy)) {
                // Wrap the Titanium proxy as a hyperloop proxy of an
                // instance
                return new InstanceProxy(convertedArgs[0]);
            }

            // Use reflection to generate an instance of the class
            // based on the args
            Constructor<?> cons = HyperloopUtil.resolveConstructor(clazz, convertedArgs);
            if (cons == null) {
                Log.e(TAG,
                        "Unable to find matching constructor for class: " + className
                                + ", args: " + HyperloopUtil.stringify(convertedArgs));
                return null;
            }

            // generate an instance of the object
            Object instance = cons.newInstance(
                    HyperloopUtil.convert(convertedArgs, cons.getParameterTypes(),
                            cons.isVarArgs()));
            if (instance == null) {
                Log.e(TAG, "Object " + className + " could not be created");
                return null;
            }

            return new InstanceProxy(clazz, instance);
        } catch (InstantiationException e) {
            Log.e(TAG, "Unable to instantiate class '" + className + "'", e);
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Unable to access class '" + className + "'", e);
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "Illegal arguments to instantiate class '" + className + "'", e);
        } catch (InvocationTargetException e) {
            Log.e(TAG, "Exception during instantiation of class '" + className + "'", e.getCause());
        }
        return null;
    }
}
