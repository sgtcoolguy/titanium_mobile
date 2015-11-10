/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import java.lang.reflect.Method;
import java.util.HashMap;

import org.appcelerator.kroll.annotations.Kroll;

import com.android.dx.stock.ProxyBuilder;

/**
 * Represents a proxy that wraps a dynamically generated class (subclass of some
 * existing class).
 * 
 * @author cwilliams
 */
@Kroll.proxy(parentModule = HyperloopModule.class)
public class DynamicSubclassProxy extends ClassProxy {

    /**
     * This is the base class name that we're dynamically extending. We expose
     * this as the class/apiName to Javascript.
     */
    private String baseClassName;
    /**
     * This is the JS Object holding the overriding implementations of methods.
     */
    private HashMap<String, Object> overrides;

    // TODO How do we handle "super"? We need to expose some way to call
    // super impls
    // Expose a super property that just sets some flag to make next
    // method invocation call up to parent?
    // but then what if they call this.super; then this.somemethod();?
    public DynamicSubclassProxy(Class<?> clazz, String baseClassName,
            HashMap<String, Object> overrides) {
        super(clazz);
        this.baseClassName = baseClassName;
        this.overrides = overrides;
    }

    @Kroll.method
    @Kroll.getProperty
    @Override
    public String getApiName() {
        return baseClassName;
    }

    @Kroll.method
    public BaseProxy newInstance(Object[] args) {
        // FIXME We need to invoke the init function in overrides!
        // We need to set up "super" somehow?
        BaseProxy result = super.newInstance(args);
        if (result == null) {
            return null;
        }
        // Now we set up instance to handle method calls via the invocation
        // handler that forwards to the JS overrides.
        ProxyBuilder.setInvocationHandler(result.getWrappedObject(),
                new DynamicSubclassInvocationHandler(result, overrides));
        return result;
    }

    /**
     * This forwards Java method calls to invoke the matching named method
     * override from the JS Object (here a HashMap<String, Object>). If there's
     * no override matching that method name, we call up to the super class.
     * 
     * @author cwilliams
     */
    @Kroll.proxy(parentModule = HyperloopModule.class)
    private static class DynamicSubclassInvocationHandler extends HyperloopInvocationHandler {

        public DynamicSubclassInvocationHandler(BaseProxy hyperloopProxy,
                HashMap<String, Object> overrides) {
            super(hyperloopProxy, overrides);
        }

        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            if (!this.overrides.containsKey(method.getName())) {
                // TODO What if superclass has marked the method as abstract?
                return HyperloopUtil
                        .unwrap(ProxyBuilder.callSuper(this.hp.getWrappedObject(), method, args));
            }

            return super.invoke(proxy, method, args);
        }

    }

}
