// JavaScript Document
// To be replaced when integration occurs

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


// Categories

var categories = new Categories();

var cat1 = new Category();
cat1.set("name", "Ελλάδα");
cat1.set("slug", "ellada");

var subcategories1 = new SubCategories();
var s11 = new SubCategory();
s11.set("name", "Ελλάδα");
subcategories1.add(s11);

cat1.set("subcategories", subcategories1);

categories.add(cat1);


var cat2 = new Category();
cat2.set("name", "Πολιτική");
cat2.set("slug", "politikh");

var subcategories2 = new SubCategories();

cat2.set("subcategories", subcategories2);

categories.add(cat2);

var cat3 = new Category();
cat3.set("name", "Οικονομία");
cat3.set("slug", "oikonomia");

var subcategories3 = new SubCategories();

cat3.set("subcategories", subcategories3);

categories.add(cat3);


var cat4 = new Category();
cat4.set("name", "Υγεία");
cat4.set("slug", "ygeia");

var subcategories4 = new SubCategories();

cat4.set("subcategories", subcategories4);

categories.add(cat4);

var cat5 = new Category();
cat5.set("name", "Κόσμος");
cat5.set("slug", "kosmos");

var subcategories5 = new SubCategories();

cat5.set("subcategories", subcategories5);

categories.add(cat5);

var cat6 = new Category();
cat6.set("name", "Αθλητικά");
cat6.set("slug", "athlitika");

var subcategories6 = new SubCategories();

cat6.set("subcategories", subcategories6);

categories.add(cat6);

var cat7 = new Category();
cat7.set("name", "Media");
cat7.set("slug", "media");

var subcategories7 = new SubCategories();

cat7.set("subcategories", subcategories7);

categories.add(cat7);

var cat8 = new Category();
cat8.set("name", "Καιρός");
cat8.set("slug", "kairos");

var subcategories8 = new SubCategories();

cat8.set("subcategories", subcategories8);

categories.add(cat8);

var cat9 = new Category();
cat9.set("name", "Κύπρος");
cat9.set("slug", "kypros");

var subcategories9 = new SubCategories();

cat9.set("subcategories", subcategories9);

categories.add(cat9);


// Articles
var articles = new Articles();

var article1 = new Article();
article1.set("content", 'Ο ενεργός Πλούτωνας σε καλεί να δώσεις ένα τέλος σε μια οικονομική υπόθεση που σου έχει γίνει «στενός κορσές» και σε αυτήν την φάση δεν υπάρχει ευκολότερη οδός για σένα...');
article1.set("unique_visitors",36789);
article1.set("author",{ first_name: "Νίκος", last_name:"Χάιτας", image:"../staff-module/staff-images-50x50/staff1-50x50.jpg"});
article1.set("categories",['Πολιτική','Ελλάδα','Αποκαλύψεις']);
article1.set("tags",['tag1','tag2','tag3','tag4','tag5']);
article1.set("images",['image1','image2','image3','image4']);
article1.set("video",['video1']);
article1.set("comments",45);

var article2 = new Article();
article2.set("content", 'Ο ενεργός Πλούτωνας σε καλεί να δώσεις ένα τέλος σε μια οικονομική υπόθεση που σου έχει γίνει «στενός κορσές» και σε αυτήν την φάση δεν υπάρχει ευκολότερη οδός για σένα...');
article2.set("unique_visitors",12136);
article2.set("author",{ first_name: "Παναγιώτης", last_name:"Ζωγράφος", image:"../staff-module/staff-images-50x50/staff1-50x50.jpg"});
article2.set("categories",['Πολιτική','Ελλάδα','Αποκαλύψεις']);
article2.set("tags",['tag1','tag2','tag3','tag4','tag5','tag6','tag7']);
article2.set("images",['image1','image2']);
article2.set("video",['video1']);
article2.set("comments",48);

var article3 = new Article();
article3.set("content", 'Ο ενεργός Πλούτωνας σε καλεί να δώσεις ένα τέλος σε μια οικονομική υπόθεση που σου έχει γίνει «στενός κορσές» και σε αυτήν την φάση δεν υπάρχει ευκολότερη οδός για σένα...');
article3.set("unique_visitors",23697);
article3.set("author",{ first_name: "Αθανάσιος", last_name:"Σεργουνιώτης", image:"../staff-module/staff-images-50x50/staff1-50x50.jpg"});
article3.set("categories",['Πολιτική','Ελλάδα','Αποκαλύψεις']);
article3.set("tags",['tag1','tag2','tag3']);
article3.set("images",['image1','image2']);
article3.set("audio",['audio1']);
article3.set("video",['video1']);
article3.set("comments",36);

var article4 = new Article();
article4.set("content", 'Ο ενεργός Πλούτωνας σε καλεί να δώσεις ένα τέλος σε μια οικονομική υπόθεση που σου έχει γίνει «στενός κορσές» και σε αυτήν την φάση δεν υπάρχει ευκολότερη οδός για σένα...');
article4.set("unique_visitors",48123);
article4.set("author",{ first_name: "Αθανάσιος", last_name:"Σεργουνιώτης", image:"../staff-module/staff-images-50x50/staff1-50x50.jpg"});
article4.set("categories",['Πολιτική','Ελλάδα','Αποκαλύψεις']);
article4.set("tags",['tag1','tag2','tag3','tag4','tag5','tag6','tag7']);
article4.set("images",['image1','image2','image3']);
article4.set("video",['video1']);
article4.set("comments",11);

var article5 = new Article();
article5.set("content", 'Ο ενεργός Πλούτωνας σε καλεί να δώσεις ένα τέλος σε μια οικονομική υπόθεση που σου έχει γίνει «στενός κορσές» και σε αυτήν την φάση δεν υπάρχει ευκολότερη οδός για σένα...');
article5.set("unique_visitors",11236);
article5.set("author",{ first_name: "Αθανάσιος", last_name:"Σεργουνιώτης", image:"../staff-module/staff-images-50x50/staff1-50x50.jpg"});
article5.set("categories",['Πολιτική','Ελλάδα','Αποκαλύψεις']);
article5.set("tags",['tag1','tag2','tag3','tag4','tag5']);
article5.set("images",['image1','image2','image3']);
article5.set("video",['video1']);
article5.set("comments",103);

var article6 = new Article();
article6.set("content", 'Ο ενεργός Πλούτωνας σε καλεί να δώσεις ένα τέλος σε μια οικονομική υπόθεση που σου έχει γίνει «στενός κορσές» και σε αυτήν την φάση δεν υπάρχει ευκολότερη οδός για σένα...');
article6.set("unique_visitors",17963);
article6.set("author",{ first_name: "Νίκος", last_name:"Χάιτας", image:"../staff-module/staff-images-50x50/staff1-50x50.jpg"});
article6.set("categories",['Πολιτική','Ελλάδα','Αποκαλύψεις']);
article6.set("tags",['tag1','tag2','tag3','tag4','tag5','tag6']);
article6.set("images",['image1','image2','image3']);
article6.set("video",['video1']);
article6.set("comments",173);

articles.add([article1, article2, article3, article4, article5, article6]);



