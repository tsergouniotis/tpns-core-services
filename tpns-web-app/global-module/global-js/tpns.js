// JavaScript Document
// Gather all dirt here :)

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
