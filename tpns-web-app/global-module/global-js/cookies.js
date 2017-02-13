// JavaScript Document
// Author: pzografos
// Description: 
// - Contains all cookie related functions and variables

var username;
var authtoken;
var selected_site;

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
    console.log("Reading cookie [username = "+username+", authtoken = "+authtoken+", selectedsite = "+selected_site.toJSON().label+"]");
}

function updateSelectedSite(new_site) {
    availableNavigationLinks.each(function(nl) {
	if (nl.toJSON().label.valueOf() == new_site){
	    selected_site = nl;
	    setCookie("selectedsite", new_site,365);
        }
    });
} 
