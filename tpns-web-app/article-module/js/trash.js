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

	readCookie();
	
	var loggedUserProfileView = new LoggedUserProfileView({model: profile});

	var articlesView = new TrashListView({collection: articles});

	var allNavigationLinksDropDownView = new AllNavigationLinksDropDownView({collection: availableNavigationLinks});
	var selectedNavigationLinkView = new SelectedNavigationLinkView({model: selected_site});
	var categoriesListView = new CategoriesListView({collection: categories});
	var subCategoriesListView = new SubCategoriesListView({collection: categories});
	var authorsListView = new AuthorsListView({collection: authors});

	$('.trashLoggedUserContainer').append(loggedUserProfileView.render().el);	

	$('.trashAuthorsContainer').append(authorsListView.render().el.childNodes);
	$('.trashCategoriesDropDownContainer').append(categoriesListView.render().el.childNodes);
	$('.trashSubCategoriesDropDownContainer').append(subCategoriesListView.render().el.childNodes);
	$('.trashPropertiesSelectionContainer').append(selectedNavigationLinkView.render().el.childNodes);
	$('.trashPropertiesDropDownContainer').append(allNavigationLinksDropDownView.render().el.childNodes);
	$('.trashTableContainer').append(articlesView.render().el.childNodes);
});
