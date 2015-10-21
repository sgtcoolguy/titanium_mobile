/**
 * Hyperloop Module
 * Copyright (c) 2015 by Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 */
var FrameLayout = require('android.widget.FrameLayout'),
	LayoutParams = require('android.widget.FrameLayout$LayoutParams'),
	ViewGroupLayoutParams = require('android.view.ViewGroup$LayoutParams'),
	Gravity = require('android.view.Gravity'),
	Log = require('android.util.Log'),
	Color = require('android.graphics.Color'),
	View = require('android.view.View'),
	OnTouchListener = require('android.view.View$OnTouchListener'),
	MotionEvent = require('android.view.MotionEvent'),
	Activity = require('android.app.Activity'),
	activity = new Activity(Ti.Android.currentActivity);

console.log("hi there!");

var drag = new OnTouchListener({
	onTouch: function(v, event) {
		console.log("onTouch!");
        // start timer for iteration
        var params,
        	action = event.getAction();
        if (action == MotionEvent.ACTION_MOVE || action == MotionEvent.ACTION_UP) {
        	console.log("action: moving/up");
        	params = v.getLayoutParams();
            params.topMargin = event.getRawY() - v.getHeight();
            console.log("topMargin: " + params.topMargin);
            params.leftMargin = event.getRawX() - (v.getWidth() / 2);
            console.log("leftMargin: " + params.topMargin);
            v.setLayoutParams(params);
        }
        console.log("done onTouch");
        return true;
	}
});
    
var main = new FrameLayout(activity);
main.setBackgroundColor(Color.BLACK);
// FIXME Tried to access LayoutParams.MATCH_PARENT and it was null, because the constant is actually defined on ViewGroupLayoutParams
// But that should work, because it does in Java!
var mainParams = new LayoutParams(ViewGroupLayoutParams.MATCH_PARENT, ViewGroupLayoutParams.MATCH_PARENT, Gravity.TOP);
main.setLayoutParams(mainParams);

var red = new View(activity);
red.setBackgroundColor(Color.RED);
var redParams = new LayoutParams(50, 50, Gravity.TOP);
red.setLayoutParams(redParams);
red.setOnTouchListener(drag);

var blue = new View(activity);
blue.setBackgroundColor(Color.BLUE);
var blueParams = new LayoutParams(50, 50, Gravity.TOP);
blueParams.setMargins(0, 100, 0, 0);
blue.setLayoutParams(blueParams);
blue.setOnTouchListener(drag);

var yellow = new View(activity);
yellow.setBackgroundColor(Color.YELLOW);
var yellowParams = new LayoutParams(50, 50, Gravity.TOP);
yellowParams.setMargins(0, 200, 0, 0);
yellow.setLayoutParams(yellowParams);
yellow.setOnTouchListener(drag);

main.addView(yellow);
main.addView(blue);
main.addView(red);

activity.setContentView(main);

console.log("Done!");