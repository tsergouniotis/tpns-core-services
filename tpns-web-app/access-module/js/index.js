// JavaScript Document

// jQuery
$(document).ready(function() {
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
});

function OpenWindow() {

	for(i=0;i<document.accessHelpGeneralForm["access-help-general-form"].length;i++) {
		if(document.accessHelpGeneralForm["access-help-general-form"][i].checked) {
			window.open(document.accessHelpGeneralForm["access-help-general-form"][i].value, "_self");
			break;
		}
	}

}

function validateUsername(){

	var uname = document.getElementById("username").value;
	
	var findNameUrl=user_service_login_url.concat('/find/').concat(uname);

	var request = $.ajax({
		type: 'GET',
		url: findNameUrl,
		accept: 'application/json',
        	contentType: 'application/json',
		dataType: 'json',
		cache: false
	});
	
	request.done(function( data) {
		window.location.replace("access.html?username="+uname);
	});

	return false;

}

$(document).ajaxError( function(e, x, settings, exception) {
	var message;
	var statusErrorMap = {
		'400' : "Server understood the request, but request content was invalid.",
		'401' : "Unauthorized access.",
		'403' : "Forbidden resource can't be accessed.",
		'500' : "Internal server error.",
		'503' : "Service unavailable."
 	};
	if (x.status===404){
		message="The email you provided above does not exist, please enter another one in order to continue.";
	} else if (x.status) {
		message =statusErrorMap[x.status];
	     	if(!message){
			message="Unknown Error.";
		}
	} else if(exception=='parsererror'){
		message="Error.\nParsing JSON Request failed.";
	} else if(exception=='timeout'){
		message="Request Time out.";
	} else if(exception=='abort'){
		message="Request was aborted by the server";
	} else {
		message="Unknown Error \n.";
	}
	$("#username").parent().addClass('validation-error');
	$("#username").parent().find("h6").show().html(message);
});
