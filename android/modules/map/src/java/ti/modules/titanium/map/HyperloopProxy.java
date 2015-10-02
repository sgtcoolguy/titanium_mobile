package ti.modules.titanium.map;

import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.KrollProxy;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.titanium.TiC;
import org.appcelerator.titanium.proxy.TiViewProxy;
import org.appcelerator.titanium.util.TiConvert;
import org.appcelerator.titanium.view.TiCompositeLayout;
import org.appcelerator.titanium.view.TiCompositeLayout.LayoutArrangement;
import org.appcelerator.titanium.view.TiUIView;

import android.app.Activity;

@Kroll.proxy(parentModule = HyperloopModule.class)
public class HyperloopProxy extends TiViewProxy {

	private class HyperloopView extends TiUIView {
		public HyperloopView(TiViewProxy proxy) {
			super(proxy);
			LayoutArrangement arrangement = LayoutArrangement.DEFAULT;

			if (proxy.hasProperty(TiC.PROPERTY_LAYOUT)) {
				String layoutProperty = TiConvert.toString(proxy.getProperty(TiC.PROPERTY_LAYOUT));
				if (layoutProperty.equals(TiC.LAYOUT_HORIZONTAL)) {
					arrangement = LayoutArrangement.HORIZONTAL;
				} else if (layoutProperty.equals(TiC.LAYOUT_VERTICAL)) {
					arrangement = LayoutArrangement.VERTICAL;
				}
			}
			setNativeView(new TiCompositeLayout(proxy.getActivity(), arrangement));
		}

		@Override
		public void processProperties(KrollDict d) {
			super.processProperties(d);
		}
	}

	private static final String TAG = "TiHyperloopProxy";
	
	private Object nativeObject;
	private String nativeClassName;
	// private List<Object> cachedReturns; // Why do we need this? Shouldn't we
	// just consult the keys of _instances?
	// Map from native object we're wrapping, to the wrapping proxy object
	// instance holding it
	private static HashMap<Object, HyperloopProxy> _instances;

	// Constructor
	public HyperloopProxy() {
		super();
	}

	@Override
	public TiUIView createView(Activity activity) {
		// TODO Create a HyperloopView that holds a standard UIView and the
		// proxy object?
		TiUIView view = new HyperloopView(this);
		view.getLayoutParams().autoFillsHeight = true;
		view.getLayoutParams().autoFillsWidth = true;
		return view;
	}

	// Handle creation options
	// equivalent to iOS _initWithProperties
	@Override
	public void handleCreationDict(KrollDict options) {
		String className = options.getString("class");
		if (className == null) {
			Log.e(TAG, "Missing 'class'");
			return;
		}
		this.nativeClassName = className;

		try {
			Class<?> c = Class.forName(className);
			if (c == null) {
				Log.e(TAG, "Class '" + className + "' not found");
				return;
			}

			Object[] initArgs = (Object[]) options.get("args");
			if (initArgs == null) {
				initArgs = new Object[0];
			}

			// should we create an instance, or should we just hold onto the class?
			boolean alloc = options.optBoolean("alloc", true);

			if (alloc) {
				Object instance = null;
				Object[] convertedArgs = convertArgs(initArgs);
				// TODO Need to lookup candidate for constructor based on the
				// arguments
				Constructor<?> cons = lookupConstructor(c, convertedArgs);
				if (cons == null) {
					Log.e(TAG, 
							"Unable to find matching constructor for class: " + className + ", args: " + convertedArgs);
					return;
				}

				instance = cons.newInstance(convertedArgs);
				this.setNativeObject(instance);

				if (this.nativeObject == null) {
					Log.e(TAG, "Object " + className + " could not be created");
					return;
				}
			}

			// wipe some props before passing on
			options.remove("args");
			options.remove("class");

			super.handleCreationDict(options);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private Object[] convertArgs(Object[] initArgs) {
		Object[] convertedArgs = new Object[initArgs.length];
		for (int i = 0; i < initArgs.length; i++) {
			convertedArgs[i] = convertArgument(initArgs[i]);
		}
		return convertedArgs;
	}

	// TODO
	// https://github.com/NativeScript/android-runtime/blob/master/src/src/com/tns/MethodResolver.java
	private Constructor<?> lookupConstructor(Class<?> c, Object[] initArgs) {
		Constructor<?>[] constructors = c.getConstructors();
		if (constructors.length == 1) {
			return constructors[0];
		}
		int argCount = (initArgs == null) ? 0 : initArgs.length;
		// if no args, assume we want a no-arg constructor!
		if (argCount == 0) {
			try {
				return c.getDeclaredConstructor();
			} catch (NoSuchMethodException e) {
				// TODO may be no no-arg constructors!
				e.printStackTrace();
			}
		}
		// Loop through constructors and find any that match by arg count? (what
		// about varargs?)
		for (Constructor<?> constructor : constructors) {
			Class<?>[] params = constructor.getParameterTypes();
			if (params.length == argCount) {
				// TODO Determine viability of arg types (can we assign/cast the
				// passed in arguments to the constructor's declared parameter
				// type?)
				// TODO Track how "close" of a match it is by how much we have
				// to do to convert the arg?
				return constructor;
			}
		}
		return null;
	}

	private Method resolveMethod(Class<?> c, String name, Object[] initArgs, boolean instanceMethod) {
		int argCount = (initArgs == null) ? 0 : initArgs.length;
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
		if (methods.length == 1) {
			return methods[0];
		}
		// Loop through methods and find any that match by arg count? (what
		// about varargs?)
		for (Method method : methods) {
			Class<?>[] params = method.getParameterTypes();
			if (params.length == argCount) {
				// TODO Determine viability of arg types (can we assign/cast the
				// passed in arguments to the constructor's declared parameter
				// type?)
				// TODO Track how "close" of a match it is by how much we have
				// to do to convert the arg?
				return method;
			}
		}
		return null;
	}

	// Methods
	@Kroll.method
	public Object callNativeFunction(Object[] args) {
		KrollDict dict;
		if (args[0] instanceof KrollDict) {
			dict = (KrollDict) args[0];
		} else {
			dict = new KrollDict((HashMap) args[0]);
		}
		String functionCall = dict.getString("func");
		if (functionCall == null) {
			// throw new Exception("'func' cannot be null");
			return null;
		}

		Object[] functionArguments = (Object[]) dict.get("args");
		boolean uiThread = dict.optBoolean("mainThread", false);
		boolean uiThreadWait = dict.optBoolean("mainThreadWait", false);
		boolean isInstanceMethod = dict.optBoolean("isInstanceMethod", false);

		if (functionArguments == null) {
			functionArguments = new Object[0];
		}

		Object result = this.invokeSelector(functionCall, functionArguments, this.nativeObject, uiThread, uiThreadWait,
				isInstanceMethod);
		return HyperloopIdToJSObject(result, this, true);
	}

	private Object HyperloopIdToJSObject(Object result, HyperloopProxy proxy, boolean acceptNil) {
		if (result == null) {
			return null;
		}
		if (HyperloopIsKnownType(result)) {
			if (result.getClass().getCanonicalName().equals(proxy.nativeClassName) && result.equals(proxy.nativeObject)) {
				return proxy;
			}
			return result;
		}
		if (result.getClass().isArray()) {
			return HyperloopArrayToJSArray(proxy, result);
		}
		if (Map.class.isAssignableFrom(result.getClass())) {
			return HyperloopMapToJSDictionary(proxy, result);
		}

		if (_instances.containsKey(result)) {
			HyperloopProxy p = _instances.get(result);
			if (p != null)
				return p;
		}

		HyperloopProxy p = new HyperloopProxy();
		p.setNativeObject(result);
		return p;
	}

	private HashMap<Object, Object> HyperloopMapToJSDictionary(HyperloopProxy proxy, Object result) {
		HashMap<Object, Object> newDict = new HashMap<Object, Object>();
		Map<Object, Object> map = (Map<Object, Object>) result;
		for (Object key : map.keySet()) {
			Object each = map.get(key);

			if (HyperloopIsKnownType(each)) {
				newDict.put(key, each);
			} else {
				if (each.getClass().isArray()) {
					newDict.put(key, HyperloopArrayToJSArray(proxy, each));
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

	private Object[] HyperloopArrayToJSArray(HyperloopProxy proxy, Object result) {
		int length = Array.getLength(result);
		Object[] newArray = new Object[length];
		for (int index = 0; index < length; index++) {
			Object each = Array.get(result, index);
			if (HyperloopIsKnownType(each)) {
				newArray[index] = each;
			} else {
				if (each.getClass().isArray()) {
					newArray[index] = HyperloopArrayToJSArray(proxy, each);
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
	 * so, we don't need to worry about converting it. Also we've whitelisted
	 * that it's ok to return.
	 * 
	 * @param item
	 * @return
	 */
	private boolean HyperloopIsKnownType(Object item) {
		if (item == null)
			return true;
		if (item.getClass() == String.class)
			return true;
		if (item.getClass() == Integer.class)
			return true;
		if (item.getClass() == Float.class)
			return true;
		if (item.getClass() == Byte.class)
			return true;
		if (item.getClass() == Long.class)
			return true;
		if (item.getClass() == Double.class)
			return true;
		if (item.getClass() == Boolean.class)
			return true;
		if (item.getClass() == Short.class)
			return true;
		if (KrollProxy.class.isAssignableFrom(item.getClass()))
			return true;

		return false;
	}

	@Kroll.method
	public void protect() {
	}

	@Kroll.method
	public void unprotect() {
	}

	public void setNativeObject(Object nativeObject) {
		this.nativeObject = nativeObject;
		if (_instances == null) {
			_instances = new HashMap<Object, HyperloopProxy>();
		}
		// do we need this _instances map?
		//_instances.put(this.nativeObject, this);
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

	private Object invokeSelector(String aSelector, Object[] args, Object obj, boolean mainThread, boolean wait,
			boolean instanceMethod) {
		Object[] convertedArgs = convertArgs(args);
		Method m = resolveMethod(obj.getClass(), aSelector, convertedArgs, instanceMethod);
		if (m == null) {
			// throw new Exception("Unable to resolve method. Class: " +
			// obj.getClass().getCanonicalName() + ", method: " + aSelector +
			// ", args: " + args);
			return null;
		}
		try {
			return m.invoke(obj, convertedArgs);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

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
}