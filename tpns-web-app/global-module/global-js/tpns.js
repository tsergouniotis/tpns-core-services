// JavaScript Document
var user_service_host = 'userService'
var user_service_port = '8081' 
var user_service_name = 'user-service'
var user_service_url = 'http://'+user_service_host+':'+user_service_port+'/'+user_service_name


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


var getHttpRequestParameter = function(parameterName) {
        if (window.requestParameters === undefined) {
            window.requestParameters = {};
            var queryString = window.location.search.substring(1);

            if (queryString.length > 0) {
                var i, pairs = queryString.split('&');

                for (i = 0; i < pairs.length; i++) {
                    var pair = pairs[i].split('=');
                    var key = pair[0].toLowerCase();
                    var value = decodeURIComponent(pair[1].replace(/\+/g, " "));

                    if (window.requestParameters[key]) {
                        var tempValue = window.requestParameters[key];

                        if (typeof tempValue === 'string') {
                            window.requestParameters[key] = [];
                            window.requestParameters[key].push(tempValue);
                        }

                        window.requestParameters[key].push(value);
                    } else {
                        window.requestParameters[key] = value;
                    }
                }
            }
        }

        return window.requestParameters[parameterName.toLowerCase()];
    };
