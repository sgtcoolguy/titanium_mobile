/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
package ti.modules.titanium.map;

import java.util.HashMap;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.titanium.TiContext;

@Kroll.module
public class HyperloopModule extends KrollModule
{

	public HyperloopModule()
	{
		super();
	}

	public HyperloopModule(TiContext tiContext)
	{
		this();
	}
	
	@Kroll.method
	public HyperloopProxy createProxy(Object[] args) {
		KrollDict dict;
		if (args[0] instanceof KrollDict) {
			dict = (KrollDict) args[0];
		} else {
			dict = new KrollDict((HashMap) args[0]);
		}
		HyperloopProxy p = new HyperloopProxy();
		p.handleCreationDict(dict);
		return p;
	}

	@Override
	public String getApiName()
	{
		return "Hyperloop";
	}
}
