// JavaScript Document
// CountChars in form based on html maxlength attribute
(function($) {
'use strict';
$.fn.countChar = function() {
	return this.each(function(i, element) {
		$(element).keyup(function updateCharCounter() {
				var $countCharInput = $(this),
				maxLength = parseInt($countCharInput.attr('maxlength'), 10),
				charCount = $countCharInput.val().length,
				$counter = $countCharInput.siblings('.limit');$counter.text(maxLength - charCount);
			});
		});
	};
}(jQuery));

// Refresh Page and get fresh code from server
$(".articles-content-refresh-button a").click(function() {
	'use strict';
	location.reload(true);
});

// Reset Articles Filter on click of the close button
$(".filter-active").find("a").click(function(e) {
	'use strict';
	$(this).parent().parent().find(".filter-active-sub-category-container, .filter-active-first-seperator").addClass("hidden");
	$(this).parent().parent().find(".filter-active-reporter, .filter-active-category, .filter-active-sub-category").html('');
	$(this).parent().parent().find(".filter-active-reporter").removeClass("hidden").removeClass("reporter-active");
	$(this).parent().parent().find(".filter-active-category").removeClass("category-active");
	$(this).parent().parent().addClass("hidden");
	$(this).parent().parent().parent().find(".filter-inactive").removeClass("hidden");
	$(".admin-bi-reporter-list").find(".current").removeAttr("class", "current");
	$(".admin-bi-reporter-list li:first-child").addClass("current").parent().parent().parent().parent().find('.selected-admin-bi-reporter-image').html($(".admin-bi-reporter-list li:first-child").find("u").clone());
	$(".admin-bi-reporter-list li:first-child").parent().parent().parent().parent().find('.selected-admin-bi-date-filter').html($(".admin-bi-reporter-list li:first-child").find("span").html());
	$(".admin-bi-category-list li").removeClass("current");
	$(".admin-bi-category-list li:first-child").addClass("current").parent().parent().parent().find('.selected-admin-bi-date-filter').html($(".admin-bi-category-list li:first-child").find("span").html());
	$('[class^="admin-bi-date-filter-selected-"]').addClass("hidden");
	e.preventDefault();
});

// Document Ready
$(document).ready( function() {
	'use strict';
	// Initialize CountChars in form
	$(".new-article-textbox").countChar();
	
	// Categories - Test to see if we have a child ul in a category parent li then do...
	$(".new-article-categories-container ul li").has("ul").find("i").removeClass("hidden");
	$(".new-article-categories-container ul li:not(:has(ul))").find(".hide-sub-categories").hide();
	$(".new-article-categories-container ul li:not(:has(ul))").find("span").addClass("admin-global-checkbox-label").before('<input type="checkbox">');
	$(".new-article-categories-container ul li ul li label input").attr("name", "" + $(".new-article-categories-container ul li ul li label input").parent().parent().parent().parent().parent().attr("class"));
	$(".new-article-categories-container ul li h5 label input").attr("name", "" + $(".new-article-categories-container ul li h5 label input").parent().parent().parent().attr("class"));
	// Categories - Toggle Sub-categories
	$(".new-article-categories-container ul li h5 > span").click(function() {
		$(this).toggleClass("hide-sub-categories");
		$(this).toggleClass("show-sub-categories");
		$(this).find(".tpns-ai-preview-hide").toggleClass("hidden");
		$(this).find(".tpns-ai-preview-show").toggleClass("hidden");
		$(this).parent().parent().find("ul").toggleClass("hidden");
	});	

	var articles = new Articles();
	initArticlesStatic(articles);
	var articlesView = new ArticlesListView({ collection: articles });
	var profileSummaryView = new ProfileSummaryView({model: profile});

	$('.allArticlesTableContainer').append(articlesView.render().el.childNodes);
	$('.allArticlesProfileSummaryContainer').append(profileSummaryView.render().el.childNodes);
	
});

function readArticles(){
	var username = getCookie("username");
	var authtoken = getCookie("authtoken");
	console.log("username = "+username);
	console.log("authtoken = "+authtoken);
}

function initArticlesStatic(articles){

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
}









