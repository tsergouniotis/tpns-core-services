$(document).ready( function() {
	'use strict';

	readCookie();

	var profileSummaryView = new ProfileSummaryView({model: profile});
	var profileNotificationsView = new ProfileNotificationsView({model: profile});
	var profileMessagesView = new ProfileMessagesView({model: profile});
	var profileSelectedArticlesView = new ProfileSelectedArticlesView({model: profile});
	var selectedNavigationLinkView = new SelectedNavigationLinkView({model: selected_site});
	var allNavigationLinksDropDownView = new AllNavigationLinksDropDownView({collection: availableNavigationLinks});

        var categoryAddView = new CategoryAddView({collection: categories});
	var categoriesListView = new CategoriesListView({collection: categories});

	$('.categoriesPropertiesSelectionContainer').append(selectedNavigationLinkView.render().el.childNodes);
	$('.categoriesPropertiesDropDownContainer').append(allNavigationLinksDropDownView.render().el.childNodes);
	$('.categoriesCentralContainer').append(categoryAddView.render().el);
	$('.categoriesCentralContainer').append(categoriesListView.render().el);
	$('.categoriesProfileSummaryContainer').append(profileSummaryView.render().el.childNodes);	
	$('.categoriesSelectedProfileNotificationsContainer').append(profileMessagesView.render().el.childNodes);	
	$('.categoriesSelectedProfileMessagesContainer').append(profileNotificationsView.render().el.childNodes);	
	$('.categoriesSelectedProfileArticlesContainer').append(profileSelectedArticlesView.render().el.childNodes);	


	// Categories Sort Items
	$(".reorder-up, .sub-reorder-up").click(function(){

		var $current = $(this).closest('li').fadeOut("slow").slideUp("slow");

		var $previous = $current.prev('li');
		if($previous.length !== 0){
			$current.insertBefore($previous).fadeIn("slow").slideDown("slow");
		}
		return false;
	});

	$(".reorder-down, .sub-reorder-down").click(function(){
		var $current = $(this).closest('li').fadeOut("slow").slideUp("slow");
		var $next = $current.next('li');
		if($next.length !== 0){
			$current.insertAfter($next).fadeIn("slow").slideDown("slow");
		}
		return false;
	});

	// Categories - Test to see if we have a child ul in a category parent li then do...
	$(".categories-data-inner:not(:has(ul))").find(".show-sub-categories").hide();
	$(".categories-data-inner:not(:has(ul))").find(".sub-categories-total-container").addClass("hidden");

	$(".show-hide-sub-categories p").click(function() {
		$(this).toggleClass("hide-sub-categories");
		$(this).toggleClass("show-sub-categories");
		$(this).find(".tpns-ai-preview-hide").toggleClass("hidden");
		$(this).find(".tpns-ai-preview-show").toggleClass("hidden");
		$(this).parent().parent().find(".sub-categories-total-container").toggleClass("hidden");
		$(this).parent().parent().parent().find(".sub-categories-data-inner-table").toggleClass("hidden");
	});
});

// Check the width of the window and do...
function PCViewUpdate() {
	'use strict';
	// Categories Tables - make the columns of all 3 tables have the same width
	var CategoriesColumnOne = $(".categories-data-header-items:nth-child(1)");
	$(".categories-data-items:nth-child(5n+1)").css('width', (CategoriesColumnOne.width()));
	$(".sub-categories-data-items:nth-child(5n+1)").css('width', (CategoriesColumnOne.width()));
	var CategoriesColumnTwo = $(".categories-data-header-items:nth-child(2)");
	$(".categories-data-items:nth-child(5n+2)").css('width', (CategoriesColumnTwo.width()));
	$(".sub-categories-data-items:nth-child(5n+2)").css('width', (CategoriesColumnTwo.width()));
	var CategoriesColumnThree = $(".categories-data-header-items:nth-child(3)");
	$(".categories-data-items:nth-child(5n+3)").css('width', (CategoriesColumnThree.width()));
	$(".sub-categories-data-items:nth-child(5n+3)").css('width', (CategoriesColumnThree.width()));
	var CategoriesColumnFour = $(".categories-data-header-items:nth-child(4)");
	$(".categories-data-items:nth-child(5n+4)").css('width', (CategoriesColumnFour.width()));
	$(".sub-categories-data-items:nth-child(5n+4)").css('width', (CategoriesColumnFour.width()));
	var CategoriesColumnFive = $(".categories-data-header-items:nth-child(5)");
	$(".categories-data-items:nth-child(5n+5)").css('width', (CategoriesColumnFive.width()));
}

$(window).load(PCViewUpdate);
$(window).resize(PCViewUpdate);
