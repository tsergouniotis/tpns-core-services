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

function readName(){
	var uname = getHttpRequestParameter("username");
	if (uname){
		document.getElementById("username").value = uname;
	} else {
		window.location.replace("index.html");
	}
}

function doLogin(){
	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var loginUrl=user_service_base_url.concat('/oauth/token?client_id=user-webapp&client_secret=secret&username=').concat(username).concat('&password=').concat(password).concat('&grant_type=password');

	var request = $.ajax({
		type: 'POST',
		url: loginUrl,
		accept: 'application/json',
        	contentType: 'application/json',
		dataType: 'json',
		cache: false
	});

	request.done(function( data) {
		var authtoken = data.access_token;
             	setCookie("username", username, 365);
             	setCookie("authtoken", authtoken, 365);
		location.href = "../newspaper-dashboard-module/newspaper-bi-dashboard.html"
	});
	 
	return false;

}

$(document).ajaxError( function(e, x, settings, exception) {
	var message;
	var statusErrorMap = {
		'401' : "Unauthorized access.",
		'403' : "Forbidden resource can't be accessed.",
		'500' : "Internal server error.",
		'503' : "Service unavailable."
 	};
	if (x.status===400){
	        var jsonResponseText = $.parseJSON(x.responseText);
		if (jsonResponseText.error_description==='USER_LOCKED'){
			message="This user has been locked. Please contact your administrator";
		} else {
			message="Invalid Password. Please try again";
		}
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
	$("#password").parent().addClass('validation-error');
	$("#password").parent().find("h6").show().html(message);
});

