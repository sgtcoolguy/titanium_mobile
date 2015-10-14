var Activity = require('android.app.Activity'),
	Button = require('android.widget.Button'),
	activity = new Activity(Ti.Android.currentActivity);
	
var button = new Button(activity);
button.setText("Native button!");
activity.setContentView(button);
