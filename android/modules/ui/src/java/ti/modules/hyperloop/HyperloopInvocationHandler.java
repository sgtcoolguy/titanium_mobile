/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.HashMap;

import org.appcelerator.kroll.KrollFunction;

/**
 * This is an invocation handler used to forward method calls from Java to the
 * JS overriding implementation. Used for anonymous instances of interfaces as
 * well as dynamic subclasses.
 * 
 * @author cwilliams
 */
class HyperloopInvocationHandler implements InvocationHandler {

    protected BaseProxy hp;
    protected HashMap<String, Object> overrides;

    public HyperloopInvocationHandler(BaseProxy hyperloopProxy,
            HashMap<String, Object> overrides) {
        this.hp = hyperloopProxy;
        this.overrides = overrides;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        // TODO What if the method was marked final?
        Object value = overrides.get(method.getName());
        if (value instanceof KrollFunction) {
            KrollFunction kf = (KrollFunction) value;
            return HyperloopUtil
                    .unwrap(kf.call(this.hp.getKrollObject(), HyperloopUtil.wrapArguments(args)));
        }

        return null;
    }

}
