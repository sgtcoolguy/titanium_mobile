var //RotateAnimation = require('android.view.animation.RotateAnimation'),
    //ScaleAnimation = require('android.view.animation.ScaleAnimation'),
    //AnimationSet = require('android.view.animation.AnimationSet'),
    Color = require('android.graphics.Color'),
    Gravity = require('android.view.Gravity'),
    View = require('android.view.View'),
    Activity = require('android.app.Activity'),
    LayoutParams = require('android.widget.FrameLayout$LayoutParams'),
	activity = new Activity(Ti.Android.currentActivity),
    view,
    layoutParams,
    scrollView,
	button,
	label,
	box;

win = Ti.UI.createWindow({
	title: 'Animate View Controller'
});

scrollView = Ti.UI.createScrollView();
view = Ti.UI.createView();
button = Ti.UI.createButton({
	title: 'Animate!',
	top: 10,
   width: 100,
   height: 50
});
label = Ti.UI.createLabel();

scrollView.add(view);
scrollView.add(button);
scrollView.add(label);
win.add(scrollView);

// create a view box we're going to animate when you click the button
box = new View(activity);
layoutParams = new LayoutParams(50, 50, Gravity.TOP);
layoutParams.setMargins(10, 10, 0, 0);
box.setLayoutParams(layoutParams);
box.setBackgroundColor(Color.RED);
view.add(box);

//var flag;
button.addEventListener('click', function () {
	//flag = !flag;
	label.setText('');
	// animate the UIView
    box.animate().alpha(0.8).scaleX(1.5).scaleY(1.5).xBy(90).yBy(90).rotation(180).setDuration(1000).start();
    //var set = new AnimationSet(true);
    //set.addAnimation(new RotateAnimation(0, 180));
    //set.addAnimation(new ScaleAnimation(1, 1.5, 1, 1.5));
    //set.setDuration(1000); // 1 second
    //box.startAnimation(set);
});

win.open();
