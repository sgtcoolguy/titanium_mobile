/**
 * Hyperloop
 * Generated code is Copyright (c) 2015 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyEvent
 */
var Hyperloop = Ti.Hyperloop;

global.android = global.android || {};
global.android.view = global.android.view || {};

/**
 * @class android.view.KeyEvent
 * @extends android.view.InputEvent 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html}
 **/
android.view.KeyEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].apiName && arguments[0].apiName === 'android.view.KeyEvent') {
		result = arguments[0];
	}
	else {
		result = Hyperloop.createProxy({
			class: 'android.view.KeyEvent',
			alloc: true,
			args: Array.prototype.slice.call(arguments)
		});
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.InputEvent');
android.view.KeyEvent.prototype = Object.create(SuperClass.prototype);
android.view.KeyEvent.prototype.constructor = android.view.KeyEvent;

android.view.KeyEvent.className = "android.view.KeyEvent";
android.view.KeyEvent.prototype.className = "android.view.KeyEvent";

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_4}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_HDMI_4 = 246;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAPS_LOCK}
 */
android.view.KeyEvent.KEYCODE_CAPS_LOCK = 115;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_PREVIOUS}
 */
android.view.KeyEvent.KEYCODE_NAVIGATE_PREVIOUS = 260;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_2}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_HDMI_2 = 244;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_A}
 */
android.view.KeyEvent.KEYCODE_BUTTON_A = 96;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_3}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_HDMI_3 = 245;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TIMER_PROGRAMMING}
 */
android.view.KeyEvent.KEYCODE_TV_TIMER_PROGRAMMING = 258;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_1}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_HDMI_1 = 243;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_B}
 */
android.view.KeyEvent.KEYCODE_BUTTON_B = 97;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_L1}
 */
android.view.KeyEvent.KEYCODE_BUTTON_L1 = 102;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_C}
 */
android.view.KeyEvent.KEYCODE_BUTTON_C = 98;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CHANNEL_DOWN}
 */
android.view.KeyEvent.KEYCODE_CHANNEL_DOWN = 167;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BRIGHTNESS_DOWN}
 */
android.view.KeyEvent.KEYCODE_BRIGHTNESS_DOWN = 220;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CTRL_LEFT}
 */
android.view.KeyEvent.KEYCODE_CTRL_LEFT = 113;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_DOWN}
 */
android.view.KeyEvent.KEYCODE_DPAD_DOWN = 20;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TERRESTRIAL_ANALOG}
 */
android.view.KeyEvent.KEYCODE_TV_TERRESTRIAL_ANALOG = 235;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ZOOM_IN}
 */
android.view.KeyEvent.KEYCODE_ZOOM_IN = 168;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HELP}
 */
android.view.KeyEvent.KEYCODE_HELP = 259;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_X}
 */
android.view.KeyEvent.KEYCODE_BUTTON_X = 99;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_Y}
 */
android.view.KeyEvent.KEYCODE_BUTTON_Y = 100;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_MULTIPLY}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_MULTIPLY = 155;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_AVR_INPUT}
 */
android.view.KeyEvent.KEYCODE_AVR_INPUT = 182;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_NUMBER_ENTRY}
 */
android.view.KeyEvent.KEYCODE_TV_NUMBER_ENTRY = 234;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_FUNCTION_ON}
 */
android.view.KeyEvent.META_FUNCTION_ON = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOLUME_UP}
 */
android.view.KeyEvent.KEYCODE_VOLUME_UP = 24;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_ON}
 */
android.view.KeyEvent.META_ALT_ON = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE_CS}
 */
android.view.KeyEvent.KEYCODE_TV_SATELLITE_CS = 239;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_RADIO_SERVICE}
 */
android.view.KeyEvent.KEYCODE_TV_RADIO_SERVICE = 232;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAPTIONS}
 */
android.view.KeyEvent.KEYCODE_CAPTIONS = 175;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CLEAR}
 */
android.view.KeyEvent.KEYCODE_CLEAR = 28;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENDCALL}
 */
android.view.KeyEvent.KEYCODE_ENDCALL = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_1}
 */
android.view.KeyEvent.KEYCODE_BUTTON_1 = 188;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_POWER}
 */
android.view.KeyEvent.KEYCODE_POWER = 26;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_4}
 */
android.view.KeyEvent.KEYCODE_BUTTON_4 = 191;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_CLOSE}
 */
android.view.KeyEvent.KEYCODE_MEDIA_CLOSE = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_5}
 */
android.view.KeyEvent.KEYCODE_BUTTON_5 = 192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_SKIP_FORWARD}
 */
android.view.KeyEvent.KEYCODE_MEDIA_SKIP_FORWARD = 272;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_2}
 */
android.view.KeyEvent.KEYCODE_BUTTON_2 = 189;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_3}
 */
android.view.KeyEvent.KEYCODE_BUTTON_3 = 190;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_8}
 */
android.view.KeyEvent.KEYCODE_BUTTON_8 = 195;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_9}
 */
android.view.KeyEvent.KEYCODE_BUTTON_9 = 196;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_AUDIO_DESCRIPTION}
 */
android.view.KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION = 252;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_RIGHT_ON}
 */
android.view.KeyEvent.META_CTRL_RIGHT_ON = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_FALLBACK}
 */
android.view.KeyEvent.FLAG_FALLBACK = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_6}
 */
android.view.KeyEvent.KEYCODE_BUTTON_6 = 193;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_NETWORK}
 */
android.view.KeyEvent.KEYCODE_TV_NETWORK = 241;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_7}
 */
android.view.KeyEvent.KEYCODE_BUTTON_7 = 194;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_WAKEUP}
 */
android.view.KeyEvent.KEYCODE_WAKEUP = 224;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_LAST_CHANNEL}
 */
android.view.KeyEvent.KEYCODE_LAST_CHANNEL = 229;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BACK}
 */
android.view.KeyEvent.KEYCODE_BACK = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_MASK}
 */
android.view.KeyEvent.META_ALT_MASK = 50;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SHIFT_RIGHT}
 */
android.view.KeyEvent.KEYCODE_SHIFT_RIGHT = 60;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DEL}
 */
android.view.KeyEvent.KEYCODE_DEL = 67;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_NUM_LOCK_ON}
 */
android.view.KeyEvent.META_NUM_LOCK_ON = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_SOFT_KEYBOARD}
 */
android.view.KeyEvent.FLAG_SOFT_KEYBOARD = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_SELECT}
 */
android.view.KeyEvent.KEYCODE_BUTTON_SELECT = 109;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NOTIFICATION}
 */
android.view.KeyEvent.KEYCODE_NOTIFICATION = 83;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_LANGUAGE_SWITCH}
 */
android.view.KeyEvent.KEYCODE_LANGUAGE_SWITCH = 204;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PICTSYMBOLS}
 */
android.view.KeyEvent.KEYCODE_PICTSYMBOLS = 94;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_STB_POWER}
 */
android.view.KeyEvent.KEYCODE_STB_POWER = 179;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_TOP_MENU}
 */
android.view.KeyEvent.KEYCODE_MEDIA_TOP_MENU = 226;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CONTACTS}
 */
android.view.KeyEvent.KEYCODE_CONTACTS = 207;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SPACE}
 */
android.view.KeyEvent.KEYCODE_SPACE = 62;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_START}
 */
android.view.KeyEvent.KEYCODE_BUTTON_START = 108;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_Z}
 */
android.view.KeyEvent.KEYCODE_BUTTON_Z = 101;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP}
 */
android.view.KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP = 253;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SETTINGS}
 */
android.view.KeyEvent.KEYCODE_SETTINGS = 176;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT = 178;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SOFT_LEFT}
 */
android.view.KeyEvent.KEYCODE_SOFT_LEFT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_WOKE_HERE}
 */
android.view.KeyEvent.FLAG_WOKE_HERE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENTER}
 */
android.view.KeyEvent.KEYCODE_ENTER = 66;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SOFT_RIGHT}
 */
android.view.KeyEvent.KEYCODE_SOFT_RIGHT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_APOSTROPHE}
 */
android.view.KeyEvent.KEYCODE_APOSTROPHE = 75;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FOCUS}
 */
android.view.KeyEvent.KEYCODE_FOCUS = 80;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HOME}
 */
android.view.KeyEvent.KEYCODE_HOME = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ALT_LEFT}
 */
android.view.KeyEvent.KEYCODE_ALT_LEFT = 57;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_L2}
 */
android.view.KeyEvent.KEYCODE_BUTTON_L2 = 104;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DVR}
 */
android.view.KeyEvent.KEYCODE_DVR = 173;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ALT_RIGHT}
 */
android.view.KeyEvent.KEYCODE_ALT_RIGHT = 58;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_INFO}
 */
android.view.KeyEvent.KEYCODE_INFO = 165;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BRIGHTNESS_UP}
 */
android.view.KeyEvent.KEYCODE_BRIGHTNESS_UP = 221;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_REWIND}
 */
android.view.KeyEvent.KEYCODE_MEDIA_REWIND = 89;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_AT}
 */
android.view.KeyEvent.KEYCODE_AT = 77;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENVELOPE}
 */
android.view.KeyEvent.KEYCODE_ENVELOPE = 65;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_EQUALS}
 */
android.view.KeyEvent.KEYCODE_EQUALS = 70;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_MASK}
 */
android.view.KeyEvent.META_SHIFT_MASK = 193;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_RIGHT_PAREN}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_RIGHT_PAREN = 163;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CHANNEL_UP}
 */
android.view.KeyEvent.KEYCODE_CHANNEL_UP = 166;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_WINDOW}
 */
android.view.KeyEvent.KEYCODE_WINDOW = 171;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MANNER_MODE}
 */
android.view.KeyEvent.KEYCODE_MANNER_MODE = 205;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_RO}
 */
android.view.KeyEvent.KEYCODE_RO = 217;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PAGE_UP}
 */
android.view.KeyEvent.KEYCODE_PAGE_UP = 92;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_GUIDE}
 */
android.view.KeyEvent.KEYCODE_GUIDE = 172;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SYM_ON}
 */
android.view.KeyEvent.META_SYM_ON = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SLEEP}
 */
android.view.KeyEvent.KEYCODE_SLEEP = 223;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BACKSLASH}
 */
android.view.KeyEvent.KEYCODE_BACKSLASH = 73;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#ACTION_UP}
 */
android.view.KeyEvent.ACTION_UP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_ANTENNA_CABLE}
 */
android.view.KeyEvent.KEYCODE_TV_ANTENNA_CABLE = 242;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PLAY}
 */
android.view.KeyEvent.KEYCODE_MEDIA_PLAY = 126;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FORWARD}
 */
android.view.KeyEvent.KEYCODE_FORWARD = 125;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HENKAN}
 */
android.view.KeyEvent.KEYCODE_HENKAN = 214;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_STB_INPUT}
 */
android.view.KeyEvent.KEYCODE_STB_INPUT = 180;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_12}
 */
android.view.KeyEvent.KEYCODE_12 = 228;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPONENT_1}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_COMPONENT_1 = 249;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_RIGHT_ON}
 */
android.view.KeyEvent.META_META_RIGHT_ON = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPONENT_2}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_COMPONENT_2 = 250;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_KATAKANA_HIRAGANA}
 */
android.view.KeyEvent.KEYCODE_KATAKANA_HIRAGANA = 215;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_11}
 */
android.view.KeyEvent.KEYCODE_11 = 227;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_POUND}
 */
android.view.KeyEvent.KEYCODE_POUND = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_NEXT}
 */
android.view.KeyEvent.KEYCODE_NAVIGATE_NEXT = 261;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUM}
 */
android.view.KeyEvent.KEYCODE_NUM = 78;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_YELLOW}
 */
android.view.KeyEvent.KEYCODE_PROG_YELLOW = 185;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SEMICOLON}
 */
android.view.KeyEvent.KEYCODE_SEMICOLON = 74;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MOVE_HOME}
 */
android.view.KeyEvent.KEYCODE_MOVE_HOME = 122;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CALL}
 */
android.view.KeyEvent.KEYCODE_CALL = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PLAY_PAUSE}
 */
android.view.KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE = 85;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ASSIST}
 */
android.view.KeyEvent.KEYCODE_ASSIST = 219;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_RIGHT_BRACKET}
 */
android.view.KeyEvent.KEYCODE_RIGHT_BRACKET = 72;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_ENTER}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_ENTER = 160;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV}
 */
android.view.KeyEvent.KEYCODE_TV = 170;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_CONTENTS_MENU}
 */
android.view.KeyEvent.KEYCODE_TV_CONTENTS_MENU = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE}
 */
android.view.KeyEvent.KEYCODE_TV_SATELLITE = 237;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_STAR}
 */
android.view.KeyEvent.KEYCODE_STAR = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PERIOD}
 */
android.view.KeyEvent.KEYCODE_PERIOD = 56;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TELETEXT}
 */
android.view.KeyEvent.KEYCODE_TV_TELETEXT = 233;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_STEP_FORWARD}
 */
android.view.KeyEvent.KEYCODE_MEDIA_STEP_FORWARD = 274;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_TRACKING}
 */
android.view.KeyEvent.FLAG_TRACKING = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_NEXT}
 */
android.view.KeyEvent.KEYCODE_MEDIA_NEXT = 87;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_LEFT_PAREN}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_LEFT_PAREN = 162;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_POWER}
 */
android.view.KeyEvent.KEYCODE_TV_POWER = 177;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_0}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_0 = 144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TAB}
 */
android.view.KeyEvent.KEYCODE_TAB = 61;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_1}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_1 = 145;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_COMMA}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_COMMA = 159;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_2}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_2 = 146;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_MODE}
 */
android.view.KeyEvent.KEYCODE_BUTTON_MODE = 110;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_3}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_3 = 147;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_4}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_4 = 148;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FUNCTION}
 */
android.view.KeyEvent.KEYCODE_FUNCTION = 119;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_5}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_5 = 149;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPOSITE_2}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_COMPOSITE_2 = 248;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_6}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_6 = 150;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPOSITE_1}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_COMPOSITE_1 = 247;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_7}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_7 = 151;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_8}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_8 = 152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_9}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_9 = 153;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOICE_ASSIST}
 */
android.view.KeyEvent.KEYCODE_VOICE_ASSIST = 231;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_META_RIGHT}
 */
android.view.KeyEvent.KEYCODE_META_RIGHT = 118;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MUHENKAN}
 */
android.view.KeyEvent.KEYCODE_MUHENKAN = 213;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MOVE_END}
 */
android.view.KeyEvent.KEYCODE_MOVE_END = 123;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SYM}
 */
android.view.KeyEvent.KEYCODE_SYM = 63;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F9}
 */
android.view.KeyEvent.KEYCODE_F9 = 139;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_UP}
 */
android.view.KeyEvent.KEYCODE_DPAD_UP = 19;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CTRL_RIGHT}
 */
android.view.KeyEvent.KEYCODE_CTRL_RIGHT = 114;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F7}
 */
android.view.KeyEvent.KEYCODE_F7 = 137;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F8}
 */
android.view.KeyEvent.KEYCODE_F8 = 138;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F5}
 */
android.view.KeyEvent.KEYCODE_F5 = 135;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F6}
 */
android.view.KeyEvent.KEYCODE_F6 = 136;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#MAX_KEYCODE}
 */
android.view.KeyEvent.MAX_KEYCODE = 84;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F3}
 */
android.view.KeyEvent.KEYCODE_F3 = 133;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F4}
 */
android.view.KeyEvent.KEYCODE_F4 = 134;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PAGE_DOWN}
 */
android.view.KeyEvent.KEYCODE_PAGE_DOWN = 93;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_Y}
 */
android.view.KeyEvent.KEYCODE_Y = 53;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_RIGHT_ON}
 */
android.view.KeyEvent.META_ALT_RIGHT_ON = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_Z}
 */
android.view.KeyEvent.KEYCODE_Z = 54;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_W}
 */
android.view.KeyEvent.KEYCODE_W = 51;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_X}
 */
android.view.KeyEvent.KEYCODE_X = 52;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_U}
 */
android.view.KeyEvent.KEYCODE_U = 49;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_FAST_FORWARD}
 */
android.view.KeyEvent.KEYCODE_MEDIA_FAST_FORWARD = 90;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_V}
 */
android.view.KeyEvent.KEYCODE_V = 50;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_S}
 */
android.view.KeyEvent.KEYCODE_S = 47;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_T}
 */
android.view.KeyEvent.KEYCODE_T = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_LONG_PRESS}
 */
android.view.KeyEvent.FLAG_LONG_PRESS = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_RECORD}
 */
android.view.KeyEvent.KEYCODE_MEDIA_RECORD = 130;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ESCAPE}
 */
android.view.KeyEvent.KEYCODE_ESCAPE = 111;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_META_LEFT}
 */
android.view.KeyEvent.KEYCODE_META_LEFT = 117;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_VIRTUAL_HARD_KEY}
 */
android.view.KeyEvent.FLAG_VIRTUAL_HARD_KEY = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MUTE}
 */
android.view.KeyEvent.KEYCODE_MUTE = 91;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PAIRING}
 */
android.view.KeyEvent.KEYCODE_PAIRING = 225;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F1}
 */
android.view.KeyEvent.KEYCODE_F1 = 131;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F2}
 */
android.view.KeyEvent.KEYCODE_F2 = 132;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SWITCH_CHARSET}
 */
android.view.KeyEvent.KEYCODE_SWITCH_CHARSET = 95;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_ZOOM_MODE}
 */
android.view.KeyEvent.KEYCODE_TV_ZOOM_MODE = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_RED}
 */
android.view.KeyEvent.KEYCODE_PROG_RED = 183;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_GREEN}
 */
android.view.KeyEvent.KEYCODE_PROG_GREEN = 184;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_YEN}
 */
android.view.KeyEvent.KEYCODE_YEN = 216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TERRESTRIAL_DIGITAL}
 */
android.view.KeyEvent.KEYCODE_TV_TERRESTRIAL_DIGITAL = 236;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_CENTER}
 */
android.view.KeyEvent.KEYCODE_DPAD_CENTER = 23;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_CANCELED_LONG_PRESS}
 */
android.view.KeyEvent.FLAG_CANCELED_LONG_PRESS = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F11}
 */
android.view.KeyEvent.KEYCODE_F11 = 141;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F10}
 */
android.view.KeyEvent.KEYCODE_F10 = 140;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_ADD}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_ADD = 157;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F12}
 */
android.view.KeyEvent.KEYCODE_F12 = 142;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_INSERT}
 */
android.view.KeyEvent.KEYCODE_INSERT = 124;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_AVR_POWER}
 */
android.view.KeyEvent.KEYCODE_AVR_POWER = 181;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_THUMBL}
 */
android.view.KeyEvent.KEYCODE_BUTTON_THUMBL = 106;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_THUMBR}
 */
android.view.KeyEvent.KEYCODE_BUTTON_THUMBR = 107;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUM_LOCK}
 */
android.view.KeyEvent.KEYCODE_NUM_LOCK = 143;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOLUME_MUTE}
 */
android.view.KeyEvent.KEYCODE_VOLUME_MUTE = 164;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PREVIOUS}
 */
android.view.KeyEvent.KEYCODE_MEDIA_PREVIOUS = 88;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_LEFT_ON}
 */
android.view.KeyEvent.META_META_LEFT_ON = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BOOKMARK}
 */
android.view.KeyEvent.KEYCODE_BOOKMARK = 174;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_LEFT_ON}
 */
android.view.KeyEvent.META_CTRL_LEFT_ON = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_VGA_1}
 */
android.view.KeyEvent.KEYCODE_TV_INPUT_VGA_1 = 251;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SCROLL_LOCK_ON}
 */
android.view.KeyEvent.META_SCROLL_LOCK_ON = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_ON}
 */
android.view.KeyEvent.META_SHIFT_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_AUDIO_TRACK}
 */
android.view.KeyEvent.KEYCODE_MEDIA_AUDIO_TRACK = 222;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_3D_MODE}
 */
android.view.KeyEvent.KEYCODE_3D_MODE = 206;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_EISU}
 */
android.view.KeyEvent.KEYCODE_EISU = 212;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BREAK}
 */
android.view.KeyEvent.KEYCODE_BREAK = 121;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_EDITOR_ACTION}
 */
android.view.KeyEvent.FLAG_EDITOR_ACTION = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_SKIP_BACKWARD}
 */
android.view.KeyEvent.KEYCODE_MEDIA_SKIP_BACKWARD = 273;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_MEDIA_CONTEXT_MENU}
 */
android.view.KeyEvent.KEYCODE_TV_MEDIA_CONTEXT_MENU = 257;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_STEP_BACKWARD}
 */
android.view.KeyEvent.KEYCODE_MEDIA_STEP_BACKWARD = 275;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FORWARD_DEL}
 */
android.view.KeyEvent.KEYCODE_FORWARD_DEL = 112;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CALENDAR}
 */
android.view.KeyEvent.KEYCODE_CALENDAR = 208;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_RIGHT}
 */
android.view.KeyEvent.KEYCODE_DPAD_RIGHT = 22;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#ACTION_DOWN}
 */
android.view.KeyEvent.ACTION_DOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ZOOM_OUT}
 */
android.view.KeyEvent.KEYCODE_ZOOM_OUT = 169;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MINUS}
 */
android.view.KeyEvent.KEYCODE_MINUS = 69;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SYSRQ}
 */
android.view.KeyEvent.KEYCODE_SYSRQ = 120;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_EQUALS}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_EQUALS = 161;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_COMMA}
 */
android.view.KeyEvent.KEYCODE_COMMA = 55;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_LEFT}
 */
android.view.KeyEvent.KEYCODE_DPAD_LEFT = 21;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ZENKAKU_HANKAKU}
 */
android.view.KeyEvent.KEYCODE_ZENKAKU_HANKAKU = 211;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_MASK}
 */
android.view.KeyEvent.META_META_MASK = 458752;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_UNKNOWN}
 */
android.view.KeyEvent.KEYCODE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CAPS_LOCK_ON}
 */
android.view.KeyEvent.META_CAPS_LOCK_ON = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SHIFT_LEFT}
 */
android.view.KeyEvent.KEYCODE_SHIFT_LEFT = 59;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_ON}
 */
android.view.KeyEvent.META_CTRL_ON = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_SUBTRACT}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_SUBTRACT = 156;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#ACTION_MULTIPLE}
 */
android.view.KeyEvent.ACTION_MULTIPLE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_LEFT_BRACKET}
 */
android.view.KeyEvent.KEYCODE_LEFT_BRACKET = 71;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_DIVIDE}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_DIVIDE = 154;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_APP_SWITCH}
 */
android.view.KeyEvent.KEYCODE_APP_SWITCH = 187;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PLUS}
 */
android.view.KeyEvent.KEYCODE_PLUS = 81;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN}
 */
android.view.KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN = 254;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_EJECT}
 */
android.view.KeyEvent.KEYCODE_MEDIA_EJECT = 129;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_FROM_SYSTEM}
 */
android.view.KeyEvent.FLAG_FROM_SYSTEM = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_BLUE}
 */
android.view.KeyEvent.KEYCODE_PROG_BLUE = 186;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_KEEP_TOUCH_MODE}
 */
android.view.KeyEvent.FLAG_KEEP_TOUCH_MODE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_GRAVE}
 */
android.view.KeyEvent.KEYCODE_GRAVE = 68;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HEADSETHOOK}
 */
android.view.KeyEvent.KEYCODE_HEADSETHOOK = 79;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_CANCELED}
 */
android.view.KeyEvent.FLAG_CANCELED = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE_SERVICE}
 */
android.view.KeyEvent.KEYCODE_TV_SATELLITE_SERVICE = 240;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_MASK}
 */
android.view.KeyEvent.META_CTRL_MASK = 28672;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CALCULATOR}
 */
android.view.KeyEvent.KEYCODE_CALCULATOR = 210;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_IN}
 */
android.view.KeyEvent.KEYCODE_NAVIGATE_IN = 262;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_EXPLORER}
 */
android.view.KeyEvent.KEYCODE_EXPLORER = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SLASH}
 */
android.view.KeyEvent.KEYCODE_SLASH = 76;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_ON}
 */
android.view.KeyEvent.META_META_ON = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_1}
 */
android.view.KeyEvent.KEYCODE_1 = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_14}
 */
android.view.KeyEvent.KEYCODE_BUTTON_14 = 201;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_2}
 */
android.view.KeyEvent.KEYCODE_2 = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_13}
 */
android.view.KeyEvent.KEYCODE_BUTTON_13 = 200;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SCROLL_LOCK}
 */
android.view.KeyEvent.KEYCODE_SCROLL_LOCK = 116;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_16}
 */
android.view.KeyEvent.KEYCODE_BUTTON_16 = 203;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_0}
 */
android.view.KeyEvent.KEYCODE_0 = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_15}
 */
android.view.KeyEvent.KEYCODE_BUTTON_15 = 202;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE_BS}
 */
android.view.KeyEvent.KEYCODE_TV_SATELLITE_BS = 238;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_10}
 */
android.view.KeyEvent.KEYCODE_BUTTON_10 = 197;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_R1}
 */
android.view.KeyEvent.KEYCODE_BUTTON_R1 = 103;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_12}
 */
android.view.KeyEvent.KEYCODE_BUTTON_12 = 199;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MUSIC}
 */
android.view.KeyEvent.KEYCODE_MUSIC = 209;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_11}
 */
android.view.KeyEvent.KEYCODE_BUTTON_11 = 198;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_R2}
 */
android.view.KeyEvent.KEYCODE_BUTTON_R2 = 105;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_LEFT_ON}
 */
android.view.KeyEvent.META_ALT_LEFT_ON = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOLUME_DOWN}
 */
android.view.KeyEvent.KEYCODE_VOLUME_DOWN = 25;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_DATA_SERVICE}
 */
android.view.KeyEvent.KEYCODE_TV_DATA_SERVICE = 230;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_OUT}
 */
android.view.KeyEvent.KEYCODE_NAVIGATE_OUT = 263;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_KANA}
 */
android.view.KeyEvent.KEYCODE_KANA = 218;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_I}
 */
android.view.KeyEvent.KEYCODE_I = 37;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_J}
 */
android.view.KeyEvent.KEYCODE_J = 38;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_G}
 */
android.view.KeyEvent.KEYCODE_G = 35;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_H}
 */
android.view.KeyEvent.KEYCODE_H = 36;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_E}
 */
android.view.KeyEvent.KEYCODE_E = 33;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_STOP}
 */
android.view.KeyEvent.KEYCODE_MEDIA_STOP = 86;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F}
 */
android.view.KeyEvent.KEYCODE_F = 34;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_C}
 */
android.view.KeyEvent.KEYCODE_C = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_LEFT_ON}
 */
android.view.KeyEvent.META_SHIFT_LEFT_ON = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_D}
 */
android.view.KeyEvent.KEYCODE_D = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_Q}
 */
android.view.KeyEvent.KEYCODE_Q = 45;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_DOT}
 */
android.view.KeyEvent.KEYCODE_NUMPAD_DOT = 158;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_R}
 */
android.view.KeyEvent.KEYCODE_R = 46;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_O}
 */
android.view.KeyEvent.KEYCODE_O = 43;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_P}
 */
android.view.KeyEvent.KEYCODE_P = 44;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_M}
 */
android.view.KeyEvent.KEYCODE_M = 41;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PAUSE}
 */
android.view.KeyEvent.KEYCODE_MEDIA_PAUSE = 127;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_N}
 */
android.view.KeyEvent.KEYCODE_N = 42;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_K}
 */
android.view.KeyEvent.KEYCODE_K = 39;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_L}
 */
android.view.KeyEvent.KEYCODE_L = 40;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_9}
 */
android.view.KeyEvent.KEYCODE_9 = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MENU}
 */
android.view.KeyEvent.KEYCODE_MENU = 82;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_7}
 */
android.view.KeyEvent.KEYCODE_7 = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_8}
 */
android.view.KeyEvent.KEYCODE_8 = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_5}
 */
android.view.KeyEvent.KEYCODE_5 = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_6}
 */
android.view.KeyEvent.KEYCODE_6 = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAMERA}
 */
android.view.KeyEvent.KEYCODE_CAMERA = 27;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_3}
 */
android.view.KeyEvent.KEYCODE_3 = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SEARCH}
 */
android.view.KeyEvent.KEYCODE_SEARCH = 84;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_4}
 */
android.view.KeyEvent.KEYCODE_4 = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_A}
 */
android.view.KeyEvent.KEYCODE_A = 29;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_B}
 */
android.view.KeyEvent.KEYCODE_B = 30;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_RIGHT_ON}
 */
android.view.KeyEvent.META_SHIFT_RIGHT_ON = 128;

// Static fields
// http://developer.android.com/reference/android/view/KeyEvent.html#CREATOR
Object.defineProperty(android.view.KeyEvent, 'CREATOR', {
	get: function() {
		var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
		});
		if (!classProxy) return null;

		var result = classProxy.getNativeField({
			field: 'CREATOR'
		});
		if (!result) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyEvent') {
				return new android.view.KeyEvent(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getModifierMetaStateMask
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getModifierMetaStateMask()}
 **/
android.view.KeyEvent.getModifierMetaStateMask = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getModifierMetaStateMask',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isModifierKey
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isModifierKey(int)}
 **/
android.view.KeyEvent.isModifierKey = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'isModifierKey',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keyCodeToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#keyCodeToString(int)}
 **/
android.view.KeyEvent.keyCodeToString = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'keyCodeToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function normalizeMetaState
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#normalizeMetaState(int)}
 **/
android.view.KeyEvent.normalizeMetaState = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'normalizeMetaState',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeadChar
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDeadChar(int, int)}
 **/
android.view.KeyEvent.getDeadChar = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getDeadChar',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function metaStateHasModifiers
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#metaStateHasModifiers(int, int)}
 **/
android.view.KeyEvent.metaStateHasModifiers = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'metaStateHasModifiers',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function metaStateHasNoModifiers
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#metaStateHasNoModifiers(int)}
 **/
android.view.KeyEvent.metaStateHasNoModifiers = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'metaStateHasNoModifiers',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeTimeRepeat
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeTimeRepeat(android.view.KeyEvent, long, int)}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeTimeRepeat(android.view.KeyEvent, long, int, int)}
 **/
android.view.KeyEvent.changeTimeRepeat = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'changeTimeRepeat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxKeyCode
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMaxKeyCode()}
 **/
android.view.KeyEvent.getMaxKeyCode = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'getMaxKeyCode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeFlags
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeFlags(android.view.KeyEvent, int)}
 **/
android.view.KeyEvent.changeFlags = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'changeFlags',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keyCodeFromString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#keyCodeFromString(java.lang.String)}
 **/
android.view.KeyEvent.keyCodeFromString = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'keyCodeFromString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeAction
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeAction(android.view.KeyEvent, int)}
 **/
android.view.KeyEvent.changeAction = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'changeAction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isGamepadButton
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isGamepadButton(int)}
 **/
android.view.KeyEvent.isGamepadButton = function() {
	var classProxy = Hyperloop.createProxy({
			class: this.className,
			alloc: false
	});
	if (!classProxy) return null;

	// FIXME If it's not a "known" type, we need to wrap the result in JS wrapper
	// TODO If return type is void, return null/undefined?
	var result = classProxy.callNativeFunction({
		func: 'isGamepadButton',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isCanceled()}
 **/
android.view.KeyEvent.prototype.isCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#dispatch(android.view.KeyEvent$Callback)}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#dispatch(android.view.KeyEvent$Callback, android.view.KeyEvent$DispatcherState, java.lang.Object)}
 **/
android.view.KeyEvent.prototype.dispatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShiftPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isShiftPressed()}
 **/
android.view.KeyEvent.prototype.isShiftPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShiftPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isNumLockOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isNumLockOn()}
 **/
android.view.KeyEvent.prototype.isNumLockOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isNumLockOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isLongPress()}
 **/
android.view.KeyEvent.prototype.isLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getKeyCode()}
 **/
android.view.KeyEvent.prototype.getKeyCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharacters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getCharacters()}
 **/
android.view.KeyEvent.prototype.getCharacters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharacters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getEventTime()}
 **/
android.view.KeyEvent.prototype.getEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnicodeChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getUnicodeChar()}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getUnicodeChar(int)}
 **/
android.view.KeyEvent.prototype.getUnicodeChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnicodeChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSystem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isSystem()}
 **/
android.view.KeyEvent.prototype.isSystem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSystem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMetaPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isMetaPressed()}
 **/
android.view.KeyEvent.prototype.isMetaPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMetaPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getSource()}
 **/
android.view.KeyEvent.prototype.getSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScrollLockOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isScrollLockOn()}
 **/
android.view.KeyEvent.prototype.isScrollLockOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScrollLockOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getFlags()}
 **/
android.view.KeyEvent.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
android.view.KeyEvent.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScanCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getScanCode()}
 **/
android.view.KeyEvent.prototype.getScanCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScanCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#setSource(int)}
 **/
android.view.KeyEvent.prototype.setSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSymPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isSymPressed()}
 **/
android.view.KeyEvent.prototype.isSymPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSymPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMatch(char[])}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMatch(char[], int)}
 **/
android.view.KeyEvent.prototype.getMatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPrintingKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isPrintingKey()}
 **/
android.view.KeyEvent.prototype.isPrintingKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPrintingKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCtrlPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isCtrlPressed()}
 **/
android.view.KeyEvent.prototype.isCtrlPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCtrlPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getNumber()}
 **/
android.view.KeyEvent.prototype.getNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getKeyData(android.view.KeyCharacterMap$KeyData)}
 **/
android.view.KeyEvent.prototype.getKeyData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getModifiers()}
 **/
android.view.KeyEvent.prototype.getModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFunctionPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isFunctionPressed()}
 **/
android.view.KeyEvent.prototype.isFunctionPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFunctionPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMetaState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMetaState()}
 **/
android.view.KeyEvent.prototype.getMetaState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMetaState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCapsLockOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isCapsLockOn()}
 **/
android.view.KeyEvent.prototype.isCapsLockOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCapsLockOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAltPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isAltPressed()}
 **/
android.view.KeyEvent.prototype.isAltPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAltPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getAction()}
 **/
android.view.KeyEvent.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDisplayLabel()}
 **/
android.view.KeyEvent.prototype.getDisplayLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDownTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDownTime()}
 **/
android.view.KeyEvent.prototype.getDownTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDownTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeviceId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDeviceId()}
 **/
android.view.KeyEvent.prototype.getDeviceId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeviceId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isTracking()}
 **/
android.view.KeyEvent.prototype.isTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#hasModifiers(int)}
 **/
android.view.KeyEvent.prototype.hasModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasNoModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#hasNoModifiers()}
 **/
android.view.KeyEvent.prototype.hasNoModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasNoModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#startTracking()}
 **/
android.view.KeyEvent.prototype.startTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyCharacterMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getKeyCharacterMap()}
 **/
android.view.KeyEvent.prototype.getKeyCharacterMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyCharacterMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#toString()}
 **/
android.view.KeyEvent.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRepeatCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getRepeatCount()}
 **/
android.view.KeyEvent.prototype.getRepeatCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRepeatCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (!result) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new android.view.KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = android.view.KeyEvent;
