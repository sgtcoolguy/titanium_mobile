/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

package ti.modules.hyperloop;

import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.titanium.view.TiUIView;

import android.app.Activity;
import android.view.View;

@Kroll.proxy(parentModule = HyperloopModule.class)
public class InstanceProxy extends BaseProxy {

    private Object nativeObject;

    protected InstanceProxy(Object nativeObject) {
        this(nativeObject == null ? null : nativeObject.getClass(), nativeObject);
    }

    protected InstanceProxy(Class<?> clazz, Object nativeObject) {
        super(clazz);
        this.nativeObject = nativeObject;
    }

    @Override
    public Object getWrappedObject() {
        return this.nativeObject;
    }

    @Override
    public TiUIView createView(Activity activity) {
        if (this.nativeObject != null && this.nativeObject instanceof View) {
            return new HyperloopView((View) this.nativeObject, this);
        }
        return null;
    }

    @Kroll.getProperty
    public boolean getIsInstanceProxy() {
        return true;
    }
}
