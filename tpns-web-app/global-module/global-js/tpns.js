// JavaScript Document
var user_service_host = 'userservice';
var user_service_port = '8081';
var user_service_name = 'user-service';
var user_service_base_url = 'http://' + user_service_host + ':' + user_service_port + '/' + user_service_name;
var user_service_complete_url = user_service_base_url + '/v1/user';
var user_service_login_url = user_service_base_url + '/v1/login';
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
// Cookie functions Document
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
} 
