/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
package ti.modules.titanium.map;

import org.appcelerator.titanium.TiDimension;
import org.appcelerator.titanium.view.TiUIView;

import android.view.View;
import android.view.ViewGroup.LayoutParams;
import android.widget.FrameLayout;

public class HyperloopView extends TiUIView {

    public HyperloopView(View nativeView, HyperloopProxy proxy) {
        super(proxy);
        // Create a container for the native View
        FrameLayout comp = new FrameLayout(proxy.getActivity());
        // Tell Ti UI Composite layout to hold this content at the top left of it's parent
        getLayoutParams().optionTop = new TiDimension(0, TiDimension.TYPE_TOP);
        getLayoutParams().optionLeft = new TiDimension(0, TiDimension.TYPE_LEFT);
        // Make this only big enough to hold it's content
        comp.setLayoutParams(
                new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        // add the native view to our container
        comp.addView(nativeView);
        // Set this TiUIView's "native view" as our new container
        setNativeView(comp);
    }

}
