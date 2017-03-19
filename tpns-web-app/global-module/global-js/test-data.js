// JavaScript Document
// To be replaced when integration occurs

// global models and views

// Profiles

// selected profile
var pstats = new ProfileStats();
pstats.set("notifications",5);
pstats.set("messages",82);
pstats.set("schedules_articles",96);
var profile = new UserProfile();
profile.set("first_name","Κατερίνα");
profile.set("last_name","Παπαδοπούλου");
profile.set("image","../staff-module/staff-images-50x50/staff6-50x50.jpg");
profile.set("email","katerina.papadopoulos@tpns.com");
profile.set("stats", pstats);

var authors = new UserProfiles();

var author1 = new UserProfile();
author1.set("first_name","Nico");
author1.set("last_name","Haitas");
author1.set("image","../staff-module/staff-images-50x50/staff1-50x50.jpg");
author1.set("email","nico.haitas@tpns.com");
authors.add(author1);

var author2 = new UserProfile();
author2.set("first_name","Panos");
author2.set("last_name","Zografos");
author2.set("image","../staff-module/staff-images-50x50/staff2-50x50.jpg");
author2.set("email","panos.zografos@tpns.com");
authors.add(author2);

var author3 = new UserProfile();
author3.set("first_name","Thanassis");
author3.set("last_name","Sergouniotis");
author3.set("image","../staff-module/staff-images-50x50/staff3-50x50.jpg");
author3.set("email","thanassis.sergouniotis@tpns.com");
authors.add(author3);

var author4 = new UserProfile();
author4.set("first_name","Katerina");
author4.set("last_name","Papadopoulos");
author4.set("image","../staff-module/staff-images-50x50/staff4-50x50.jpg");
author4.set("email","katerina.papadopoulos@tpns.com");
authors.add(author4);



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

// Ellada
var scats1 = new SubCategories();

var scat11 = new SubCategory();
scat11.set("name", "Ειδήσεις");
scat11.set("slug", "eidhseis");
scats1.add(scat11);

var scat12 = new SubCategory();
scat12.set("name", "Εθνικά");
scat12.set("slug", "Ethnika");
scats1.add(scat12);

var scat13 = new SubCategory();
scat13.set("name", "Παιδεία");
scat13.set("slug", "paideia");
scats1.add(scat13);

var scat14 = new SubCategory();
scat14.set("name", "Αστυνομικό");
scat14.set("slug", "astynomiko");
scats1.add(scat14);

var scat15 = new SubCategory();
scat15.set("name", "Δικαιοσύνη");
scat15.set("slug", "dikaiosynh");
scats1.add(scat15);

var scat16 = new SubCategory();
scat16.set("name", "Πολιτισμός");
scat16.set("slug", "politismos");
scats1.add(scat16);

var scat17 = new SubCategory();
scat17.set("name", "Αποκαλύψεις");
scat17.set("slug", "apokalypseis");
scats1.add(scat17);

var scat18 = new SubCategory();
scat18.set("name", "Εκκλησία");
scat18.set("slug", "ekklisia");
scats1.add(scat18);

var scat19 = new SubCategory();
scat19.set("name", "Σεισμοί");
scat19.set("slug", "Σεισμοί");
scats1.add(scat19);

var scat110 = new SubCategory();
scat110.set("name", "Άμυνα");
scat110.set("slug", "amyna");
scats1.add(scat110);

var cat1 = new Category();
cat1.set("name", "Ελλάδα");
cat1.set("slug", "ellada");
cat1.set("subcategories", scats1);

categories.add(cat1);

// Politiki
var scats2 = new SubCategories();

var scat21 = new SubCategory();
scat21.set("name", "Ειδήσεις");
scat21.set("slug", "eidhseis");
scats2.add(scat21);

var scat22 = new SubCategory();
scat22.set("name", "Παραπολιτικά");
scat22.set("slug", "parapolitika");
scats2.add(scat22);

var scat23 = new SubCategory();
scat23.set("name", "Βουλή");
scat23.set("slug", "vouli");
scats2.add(scat23);

var scat24 = new SubCategory();
scat24.set("name", "Βαρόμετρο");
scat24.set("slug", "varometro");
scats2.add(scat24);

var scat25 = new SubCategory();
scat25.set("name", "Εκλογές");
scat25.set("slug", "ekloges");
scats2.add(scat25);

var scat26 = new SubCategory();
scat26.set("name", "Αυτοδιοίκηση");
scat26.set("slug", "autpdioikish");
scats2.add(scat26);

var cat2 = new Category();
cat2.set("name", "Πολιτική");
cat2.set("slug", "politikh");
cat2.set("subcategories", scats2);

categories.add(cat2);

// Oikonomia
var scats3 = new SubCategories();

var scat31 = new SubCategory();
scat31.set("name", "Ειδήσεις");
scat31.set("slug", "eidhseis");
scats3.add(scat31);

var scat32 = new SubCategory();
scat32.set("name", "Επιχειρήσεις");
scat32.set("slug", "epixeirhseis");
scats3.add(scat32);

var scat33 = new SubCategory();
scat33.set("name", "Χρηματιστήριο");
scat33.set("slug", "hrimatistirio");
scats3.add(scat33);

var scat34 = new SubCategory();
scat34.set("name", "Ναυτιλία");
scat34.set("slug", "nautilia");
scats3.add(scat34);

var scat35 = new SubCategory();
scat35.set("name", "Αγορές");
scat35.set("slug", "agores");
scats3.add(scat35);

var scat36 = new SubCategory();
scat36.set("name", "Τράπεζες");
scat36.set("slug", "trapezes");
scats3.add(scat36);

var scat37 = new SubCategory();
scat37.set("name", "Εργασία");
scat37.set("slug", "ergasia");
scats3.add(scat37);

var scat38 = new SubCategory();
scat38.set("name", "Ενέργεια");
scat38.set("slug", "energeia");
scats3.add(scat38);

var cat3 = new Category();
cat3.set("name", "Οικονομία");
cat3.set("slug", "oikonomia");
cat3.set("subcategories", scats3);

categories.add(cat3);

// Υγεία

var scats4 = new SubCategories();

var scat41 = new SubCategory();
scat41.set("name", "Ειδήσεις");
scat41.set("slug", "eidhseis");
scats4.add(scat41);

var scat42 = new SubCategory();
scat42.set("name", "Π.Ε.Δ.Υ.");
scat42.set("slug", "pedy");
scats4.add(scat42);

var scat43 = new SubCategory();
scat43.set("name", "Φάρμακο");
scat43.set("slug", "farmako");
scats4.add(scat43);

var scat44 = new SubCategory();
scat44.set("name", "Νοσοκομεία");
scat44.set("slug", "noskomeia");
scats4.add(scat44);

var scat45 = new SubCategory();
scat45.set("name", "Γιατροί");
scat45.set("slug", "giatroi");
scats4.add(scat45);

var scat46 = new SubCategory();
scat46.set("name", "Συνεντέυξεις");
scat46.set("slug", "synenteykseis");
scats4.add(scat46);

var cat4 = new Category();
cat4.set("name", "Υγεία");
cat4.set("slug", "ygeia");
cat4.set("subcategories", scat46);

categories.add(cat4);

// Kosmos

var scats5 = new SubCategories();

var scat51 = new SubCategory();
scat51.set("name", "Ειδήσεις");
scat51.set("slug", "eidhseis");
scats5.add(scat51);

var scat52 = new SubCategory();
scat52.set("name", "Ευρώπη");
scat52.set("slug", "eurwpi");
scats5.add(scat52);

var scat53 = new SubCategory();
scat53.set("name", "Ρωσία");
scat53.set("slug", "rwsia");
scats5.add(scat53);

var scat54 = new SubCategory();
scat54.set("name", "Λατινική Αμερική");
scat54.set("slug", "latiniki ameriki");
scats5.add(scat54);

var scat55 = new SubCategory();
scat55.set("name", "Αυστραλία");
scat55.set("slug", "australia");
scats5.add(scat55);

var scat56 = new SubCategory();
scat56.set("name", "Αφρική");
scat56.set("slug", "afriki");
scats5.add(scat56);

var scat57 = new SubCategory();
scat57.set("name", "Ασία");
scat57.set("slug", "asia");
scats5.add(scat57);

var cat5 = new Category();
cat5.set("name", "Κόσμος");
cat5.set("slug", "kosmos");
cat4.set("subcategories", scats5);

categories.add(cat5);

// Αθλητικά

var scats6 = new SubCategories();

var scat61 = new SubCategory();
scat61.set("name", "Ειδήσεις");
scat61.set("slug", "eidhseis");
scats6.add(scat61);

var scat62 = new SubCategory();
scat62.set("name", "Ποδόσφαιρο");
scat62.set("slug", "podosfairo");
scats6.add(scat62);

var scat63 = new SubCategory();
scat63.set("name", "Μπάσκετ");
scat63.set("slug", "mpasker");
scats6.add(scat63);

var scat64 = new SubCategory();
scat64.set("name", "Σπορ");
scat64.set("slug", "spor");
scats6.add(scat64);

var scat65 = new SubCategory();
scat65.set("name", "Στοίχημα");
scat65.set("slug", "stoixima");
scats6.add(scat65);

var cat6 = new Category();
cat6.set("name", "Αθλητικά");
cat6.set("slug", "athlitika");
cat6.set("subcategories", scats6);

categories.add(cat6);

// Media

var scats7 = new SubCategories();

var scat71 = new SubCategory();
scat71.set("name", "Τηλεόραση");
scat71.set("slug", "tileorasi");
scats7.add(scat71);

var scat72 = new SubCategory();
scat72.set("name", "Τύπος");
scat72.set("slug", "typos");
scats7.add(scat72);

var scat73 = new SubCategory();
scat73.set("name", "Ραδιόφωνο");
scat73.set("slug", "radiofwno");
scats7.add(scat73);

var scat74 = new SubCategory();
scat74.set("name", "Internet");
scat74.set("slug", "internet");
scats7.add(scat74);

var cat7 = new Category();
cat7.set("name", "Media");
cat7.set("slug", "media");
cat7.set("subcategories", scats7);

categories.add(cat7);

// Kairos

var scats8 = new SubCategories();

var scat81 = new SubCategory();
scat81.set("name", "Πρόγνωση ΕΜΥ");
scat81.set("slug", "prognwsi");
scats8.add(scat81);

var scat82 = new SubCategory();
scat82.set("name", "Έκτακτα Δελτία");
scat82.set("slug", "ektakta");
scats8.add(scat82);

var scat83 = new SubCategory();
scat83.set("name", "Πολιτική Προστασία");
scat83.set("slug", "pprostasia");
scats8.add(scat83);

var scat84 = new SubCategory();
scat84.set("name", "Χιονοδρομικά Κέντρα");
scat84.set("slug", "hkentra");
scats8.add(scat84);

var cat8 = new Category();
cat8.set("name", "Καιρός");
cat8.set("slug", "kairos");
cat8.set("subcategories", scats8);

categories.add(cat8);

// kypros

var scats9 = new SubCategories();

var cat9 = new Category();
cat9.set("name", "Κύπρος");
cat9.set("slug", "kypros");
cat9.set("subcategories", scats9);

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



