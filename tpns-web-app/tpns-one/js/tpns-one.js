// JavaScript Document

// Header Main Menu Controls
$.fn.headerMainNav = function(){ 
	'use strict';
	var headerWrapWidth = $(".header-wrap").width();
	var titleWidth = $(".title").width();
	var headerOverflowNav = $(".header-mainnav-overflow-menu").width();
	var headerWrap = headerWrapWidth - (headerOverflowNav + titleWidth);
	var headerNav = $(".header-mainnav-menu").innerWidth();
	if (headerWrap - headerNav <= 0){
		$(".header-mainnav-menu li:last-child").queue(function(){
			$(this).prependTo(".header-mainnav-overflow-items").dequeue();
		});
		return false;
	}
	if (headerWrap - headerNav > titleWidth){
		$(".header-mainnav-overflow-items li:first-child").queue(function(){
			$(this).appendTo(".header-mainnav-menu").dequeue();
		});
		return false;
	}
	return true;
};

// jQuery
$(document).ready(function() {
	'use strict';
	// ***************** Add to Home Screen for mobile STARTS HERE *****************
	var _ath = addToHomescreen;
	// This is the special custom message for stock android, it has to be customized to your needs
	var athMessages = {
		samsungAndroid: 'Custom message for Samsung Android. Click the menu hardware button and blah blah blah. This is an icon if needed: %icon',
		stockAndroid: 'Custom message for stock Android. Click the menu hardware button and blah blah blah. This is an icon if needed: %icon'
	};
	// Add stock browser compatibility
	var _ua = window.navigator.userAgent;
	_ath.isAndroidBrowser = _ua.indexOf('Android') > -1 && !(/Chrome\/[.0-9]*/).test(_ua);
	_ath.isCompatible = _ath.isCompatible || _ath.isAndroidBrowser;
	if ( _ath.OS == 'unsupported' && _ath.isAndroidBrowser ) {
		// additionally we check for some Samsung devices (not strictly needed)
		_ath.OS = (/ (GT-I9|GT-P7|SM-T2|GT-P5|GT-P3|SCH-I8)/).test(_ua) ? 'samsungAndroid' : 'stockAndroid';
	}
	_ath({
		message: _ath.OS in athMessages ? athMessages[_ath.OS] : '',
		// the followings are just for debug, customize the options to your needs
		skipFirstVisit: false,
		displayPace: false
		//debug: true
		
		// The optimal setting for the go live are as follows, remove all of the above controllers...
		// skipFirstVisit: true,
		// maxDisplayCount: 1
	});
	// *********************** ENDS HERE **********************
	
	// Header Main Column width controllers
	var headerOverflowNavCell = $(".header-mainnav-overflow-menu").find(".header-mainnav-overflow-menu-button");
	$(".header-mainnav-overflow-menu").css('width', (headerOverflowNavCell.width()));
	var titleWidthCell = $(".title").find("img");
	$(".title").css('width', (titleWidthCell.width()));
		
		
});

// Check the width of the window and do...
function PCViewUpdate() {
	'use strict';
	// Initialise Header Main Menu Controls on a per list item basis
	$(".header-mainnav li, .header-mainnav-overflow-menu li").each(function() {
		$(this).headerMainNav();
	});
	
	
}
$(window).load(PCViewUpdate);
$(window).resize(PCViewUpdate);
