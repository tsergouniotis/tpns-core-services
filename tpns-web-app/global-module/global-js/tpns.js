// JavaScript Document

// Backend loacation values
var user_service_host = 'userservice';
var user_service_port = '8081';
var user_service_name = 'user-service';
var user_service_base_url = 'http://' + user_service_host + ':' + user_service_port + '/' + user_service_name;
var user_service_complete_url = user_service_base_url + '/v1/user';
var user_service_login_url = user_service_base_url + '/v1/login';

// Cookie values
var username;
var authtoken;
var selected_site;

// global models and views
var profile = new UserProfile();
profile.set("first_name","Κατερίνα");
profile.set("last_name","Παπαδοπούλου");
profile.set("image","../staff-module/staff-images-50x50/staff6-50x50.jpg");
profile.set("email","katerina.papadopoulos@tpns.com");

var properties = new Properties();

// TODO replace with code that checks which properties are available for user
// Replace START
var p1 = new Property();
p1.set("name","TPNS Astrology");
p1.set("location","/newspaper-dashboard-module/newspaper-bi-dashboard.html");
p1.set("icon","icon tpns-nti-astrology-website");
properties.add(p1);
var p2 = new Property();
p2.set("name","TPNS Lifestyle");
p2.set("location","/newspaper-dashboard-module/newspaper-bi-dashboard.html");
p2.set("icon","icon tpns-nti-lifestyle-website");
properties.add(p2);
var p3 = new Property();
p3.set("name","TPNS News");
p3.set("location","/newspaper-dashboard-module/newspaper-bi-dashboard.html");
p3.set("icon","icon tpns-nti-news-website");
properties.add(p3);
var p4 = new Property();
p4.set("name","TPNS Sports");
p4.set("location","/newspaper-dashboard-module/newspaper-bi-dashboard.html");
p4.set("icon","icon tpns-nti-sports-website");
properties.add(p4);

var settings = new Settings();
settings.set("group_name","TPNS Group");
settings.set("properties", properties);
settings.set("dashboard","dashboard-module/global-bi-dashboard.html");
// Replace END

// Dynamically create navigation links
var availableNavigationLinks = new NavigationDestinations();

var nd1 = new NavigationDestination();
nd1.set("label", settings.get("group_name"));
nd1.set("location", settings.get("dashboard"));
availableNavigationLinks.add(nd1);

properties.each(function(property) {
    var ndi = new NavigationDestination();
    ndi.set("label", property.get("name"));
    ndi.set("location", property.get("location"));
    availableNavigationLinks.add(ndi);
});

// util functions
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
function isNotEmpty(value){
     return typeof(value) !== "undefined" && value
}
function isEmpty(value){
     return !isNotEmpty(value);
}
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
function readCookie(){
    username = getCookie("username");
    authtoken = getCookie("authtoken");
    selected_site_name = getCookie("selectedsite");
    if (isEmpty(selected_site_name)){
	selected_site_name = "TPNS News";
    } 
    updateSelectedSite(selected_site_name);
    console.log("Reading cookie ...");
    console.log("username = "+username);
    console.log("authtoken = "+authtoken);
    console.log("selectedsite = "+selected_site.toJSON().label);
}
function updateSelectedSite(new_site) {
    availableNavigationLinks.each(function(nl) {
	if (nl.toJSON().label.valueOf() == new_site){
	    selected_site = nl;
	    setCookie("selectedsite", new_site,365);
        }
    });
} 
