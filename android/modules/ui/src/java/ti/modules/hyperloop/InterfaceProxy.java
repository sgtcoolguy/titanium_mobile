/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import java.lang.reflect.Proxy;
import java.util.HashMap;

import org.appcelerator.kroll.annotations.Kroll;

/**
 * Represents a wrapper around an anonymous instance of an interface.
 * 
 * @author cwilliams
 */
@Kroll.proxy(parentModule = HyperloopModule.class)
public class InterfaceProxy extends BaseProxy {
    
    // TODO Can we just make this a ClassProxy?

    /**
     * The dynamic proxy for the interface.
     */
    private Object nativeObject;

    public InterfaceProxy(Class<?> interfaceClass, HashMap<String, Object> overrides) {
        super(interfaceClass);
        this.nativeObject = Proxy.newProxyInstance(this.getClass().getClassLoader(), new Class[] {
                interfaceClass
        }, new HyperloopInvocationHandler(this, overrides));
    }

    @Override
    public Object getWrappedObject() {
        return nativeObject;
    }

}
