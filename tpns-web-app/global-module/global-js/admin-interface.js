// JavaScript Document
// Add decimal points in a number to make it more legible
$.fn.digits = function(){ 
	'use strict';
	return this.each(function(){ 
		$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
	});
};
// Global Checkboxes
/* Checkbox selected */
$("input.single-article-checkbox:checkbox").removeAttr('checked');
function check() {
	'use strict';
	var $checkbox = $(this);
	if ($checkbox.is(":checked")) {
		$checkbox.attr('checked','checked').parent().parent().parent().parent().addClass("admin-global-checkbox-checked");
	} else {
		$checkbox.removeAttr('checked').parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
	}
	if ($("input.single-article-checkbox:checkbox").is(":checked")) {
		$(".admin-articles-bulk-actions-controller").removeClass("hidden");
		$(".select-all-rows-button-check").addClass("hidden");
		$(".select-all-rows-button-uncheck").removeClass("hidden");
		$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find(".categories-data-inner-table input").prop('checked','checked');
		$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find(".categories-data-inner-table .admin-global-checkbox-label").attr('checked','checked');
		$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find(".categories-data-inner-table").addClass("admin-global-checkbox-checked");
		//$(".categories-data-items input.single-article-checkbox:checkbox").is(":checked").parent().parent().parent().parent().parent().parent(".categories-data-inner").find("input.sub-cat").prop('checked','checked');
	} else {
		$(".admin-articles-bulk-actions-controller").addClass("hidden");
		$(".select-all-rows-button-check").removeClass("hidden");
		$(".select-all-rows-button-uncheck").addClass("hidden");
		$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find(".categories-data-inner-table input").removeAttr('checked');
		$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find(".categories-data-inner-table .admin-global-checkbox-label").removeAttr('checked');
		$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find(".categories-data-inner-table").removeClass("admin-global-checkbox-checked");
		//$checkbox.parent().parent().parent().parent().parent().parent(".categories-data-inner").find("input.sub-cat").removeAttr('checked');
	}
	/*
	if ($(".categories-data-items input.single-article-checkbox:checkbox").is(":checked")) {
		$(this).parentsUntil(".categories-data-inner").find("input.sub-cat:checkbox").removeAttr('checked').prop('checked','checked');
		//$(this).parentsUntil(".categories-data-inner").find(".sub-categories-data-items p label span").removeAttr('checked');
	} else {
		$(this).parentsUntil(".categories-data-inner").find("input.sub-cat:checkbox").removeAttr('checked');
	}
	*/
		
}
$("input[type=checkbox]").each(check).change(check);
/* Activate options dropdown menu for articles */
/* Select all checkboxes */
$(".select-all-rows-button-check, .select-all-rows-button-uncheck").on("click", function () {
	'use strict';
	var check = $("input.single-article-checkbox:checkbox").is(":checked") ? false:true;
	$("input.single-article-checkbox:checkbox").prop('checked', check).attr('checked','checked').parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
	if ($("input.single-article-checkbox:checkbox").is(':checked')) {
		$(".admin-articles-bulk-actions-controller").removeClass("hidden");
		$("input.single-article-checkbox:checkbox").parent().parent().parent().parent().addClass("admin-global-checkbox-checked");
		$(".select-all-rows-button-check").addClass("hidden");
		$(".select-all-rows-button-uncheck").removeClass("hidden");
	}
});
$(".select-all-rows-button-uncheck").on("click", function () {
	'use strict';
	var uncheck = $("input.single-article-checkbox:checkbox").is(":checked") ? false:true;
	$("input.single-article-checkbox:checkbox").attr('checked', uncheck).removeAttr('checked');
	if ($("input.single-article-checkbox:checkbox").is(':checked') !== true) {
		$(".admin-articles-bulk-actions-controller").addClass("hidden");
		$("input.single-article-checkbox:checkbox").parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
		$(".select-all-rows-button-check").removeClass("hidden");
		$(".select-all-rows-button-uncheck").addClass("hidden");
	}
});

$(document).ready( function() {
	'use strict';
	// Where to add the decimal points in the document
	$(".admin-decimals").digits();
	// Main Nav from Max to Min
	$(".admin-minimise-nav a").click(function(e) {
		$(this).parent().addClass("hidden");
		$(".admin-maximise-nav").removeClass("hidden");
		$(".admin-left-column").css('width', 58);
		$(".admin-right-column").css('margin-left', 58 + 'px');
		$(".admin-logo-image").addClass("hidden");
		$(".nav-max").addClass("hidden").parent().parent().parent().addClass("nav-minimised");
		$(this).parent().parent().addClass("admin-min-nav-controller");
		$(".main-nav-category-loop-title.current").removeClass("current").addClass("min-current");
		$(".main-nav-other").addClass("textl").removeClass("textc");
		e.preventDefault();
	});
	// Main Nav from Min to Max
	$(".admin-maximise-nav a").click(function(e) {
		$(this).parent().addClass("hidden");
		$(".admin-minimise-nav, .admin-logo-image").removeClass("hidden");
		$(".nav-max").removeClass("hidden").parent().parent().parent().removeClass("nav-minimised");
		$(".admin-left-column, .admin-right-column").removeAttr("style");
		$(this).parent().parent().removeClass("admin-min-nav-controller");
		$(".main-nav-category-loop-title.min-current").removeClass("min-current").addClass("current");
		$(".main-nav-other").removeClass("textl").addClass("textc");
		e.preventDefault();
	});
	// Main Menu Convert Hover to Touch Events for Mobile Devices
	$(".main-nav-category-loop").on('touchstart', function(){
		$(this).find(".main-nav-category-loop-list ul").show();
	});
	$(".admin-left-column, .admin-right-column, .admin-controllers-container, .admin-logo-nav-container").on('touchend', function(){
		$(this).find(".main-nav-category-loop-list ul").removeAttr("style");
	});
	// Global Dashboard Navigation
	// Admin Global Mobile Only Search Menu Open
	$(".admin-mobile-only-click-menu-button-open").click(function(e) {
		$(this).addClass("hidden").hide();
		$(this).parent().parent().find(".admin-mobile-only-click-menu-button-close").removeClass("hidden").addClass("open");
		$(this).parent().parent().parent().find(".admin-mobile-only-click-menu-content").show();
		e.preventDefault();
	});
	// Admin Global Mobile Only Search Sub Menu Close
	$(".admin-mobile-only-click-menu-button-close").click(function(e) {
		$(this).addClass("hidden").removeClass("open");
		$(this).parent().parent().find(".admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		$(this).parent().parent().parent().find(".admin-mobile-only-click-menu-content").removeAttr("style");
		e.preventDefault();
	});
	/* for keeping track of what's "open" */
	var activeClass = 'dropdown-active', showingDropdown, showingMenu, showingParent;
	/* hides the current menu */
	var hideMenu = function() {
		if(showingDropdown) {
			showingDropdown.closest(".admin-global-controllers-tab-button").find("i:first-of-type").removeClass("hidden");
			showingDropdown.closest(".admin-global-controllers-tab-button").find("i:last-of-type").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-mobile span.icon:nth-child(2)").removeClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-mobile span.icon:nth-child(3)").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-articles-table").find("span.icon:nth-child(3)").removeClass("hidden");
			showingDropdown.closest(".admin-click-menu-articles-table").find("span.icon:nth-child(4)").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-new-article-triple span.icon:nth-child(2)").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-new-article-triple span.icon:nth-child(3)").removeClass("hidden");
			showingDropdown.removeClass(activeClass);
			showingMenu.hide();
		}
	};
	/* recurse through dropdown menus */
	$('.dropdown').each(function() {
		/* track elements: menu, parents with customisations and siblings */
		var dropdown = $(this);
		var menu = dropdown.parent().parent().next('.dropdown-menu'), parent = dropdown.parent();
		/* function that shows THIS menu */
		var showMenu = function() {
			hideMenu();
			showingDropdown = dropdown.parent().addClass('dropdown-active');
			dropdown.closest(".admin-global-controllers-tab-button").find("i:first-of-type").addClass("hidden");
			dropdown.closest(".admin-global-controllers-tab-button").find("i:last-of-type").removeClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-mobile span.icon:nth-child(2)").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-mobile span.icon:nth-child(3)").removeClass("hidden");
			showingDropdown.closest(".admin-click-menu-articles-table").find("span.icon:nth-child(3)").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-articles-table").find("span.icon:nth-child(4)").removeClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-new-article-triple span.icon:nth-child(2)").addClass("hidden");
			showingDropdown.closest(".admin-click-menu-button").find(".admin-click-menu-new-article-triple span.icon:nth-child(3)").removeClass("hidden");
			showingMenu = menu.show();
			showingParent = parent;
		};
		/* function to show menu when clicked */
		dropdown.bind('click',function(e) {
			if(e) {
				e.stopPropagation();
			}
			if(e) {
				e.preventDefault();
			}
			//showMenu();
			if ( dropdown.parent().hasClass('dropdown-active') ) {
				hideMenu();
			} else {
				showMenu();
			}
		});
		/* function to show menu when someone tabs to the box */
		dropdown.bind('focus',function() {
			showMenu();
		});
	});
	/* hide when clicked outside */
	$(document.body).bind('click',function(e) {
		if(showingParent) {
			var parentElement = showingParent[0];
			if(!$.contains(parentElement,e.target) || parentElement === e.target) {
				hideMenu();
			}
		}
	});
	// Options for Open Click Menu
	$(".admin-click-menu-content-list li a").on('click', function(e){
		$(this).parent().siblings().removeClass('current');
		$(this).parent().parent().parent().parent().parent().find(".admin-bi-date-filter-selected-" + $(this).parent().attr("class")).removeClass("hidden").siblings().addClass("hidden");
		$(this).parent().addClass('current');
		$(this).parent().parent().parent().parent().find('.selected-admin-bi-date-filter').html($(this).find("span").html());
		// If this is the Reporter Filter List being clicked then add results in the relevant div
		if ( $(this).parent().parent().parent().find(".admin-bi-reporter-list").length ) {
			$(this).closest("body").find(".filter-inactive").addClass("hidden");
			$(this).closest("body").find(".filter-active").removeClass("hidden").find(".filter-active-reporter").addClass("reporter-active").html($(this).find("u, span").clone());
			if($(".filter-active-category").hasClass("category-active")) {
				$(".filter-active-first-seperator").removeClass("hidden").addClass("filter-active-first-seperator-active");
				$(".admin-click-menu-button-pc-close").trigger("click");
				e.stopPropogation();
			} else {
				$(".filter-active-first-seperator").addClass("hidden").removeClass("filter-active-first-seperator-active");
			}
		}
		// If this is the Category Filter List being clicked then add results in the relevant div
		if ( $(this).parent().parent().parent().find(".admin-bi-category-list").length ) {
			$(this).closest("body").find(".filter-inactive").addClass("hidden");
			$(this).closest("body").find(".filter-active").removeClass("hidden").find(".filter-active-category").addClass("category-active").html($(this).find("u, span").clone());
			if($(".filter-active-reporter").hasClass("reporter-active")) {
				$(".filter-active-first-seperator").removeClass("hidden").addClass("filter-active-first-seperator-active");
			} else {
				$(".filter-active-first-seperator").addClass("hidden").removeClass("filter-active-first-seperator-active");
			}
		}
		// If this is the Sub Category Filter List being clicked then add results in the relevant div
		if ( $(this).parent().parent().parent().find(".admin-bi-sub-category-list").length ) {
			$(this).closest("body").find(".filter-active-sub-category-container").removeClass("hidden").addClass("filter-active-second-seperator-active").find(".filter-active-sub-category").html($(this).find("u, span").clone());
		} else {
			$(this).closest("body").find(".filter-active-sub-category-container").addClass("hidden").removeClass("filter-active-second-seperator-active");
		}
		if ( $(this).find("u").length ) {
			$(this).parent().parent().parent().parent().find('.selected-admin-bi-reporter-image').html($(this).find("u").clone());
		}
		$(this).parent().parent().parent().parent().find(".admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close").addClass("hidden").removeClass("open");
		$(this).parent().parent().parent().parent().find(".admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(this).parent().parent().parent().parent().find(".admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open").removeClass("hidden").removeAttr("style");
	});
});

// Check the width of the window and do...
function PCViewUpdate() {
	'use strict';
	if ($(window).width() <= 1000) {
		$(".admin-maximise-nav a").parent().addClass("hidden");
		$(".admin-minimise-nav, .nav-max, .admin-logo-image").removeClass("hidden");
		$(".admin-left-column, .admin-right-column").removeAttr("style");
		$(".admin-maximise-nav a").parent().parent().removeClass("admin-min-nav-controller");
		$(".main-nav-category-loop-title.min-current").removeClass("min-current").addClass("current");
		$(".main-nav-other").removeClass("textl").addClass("textc");
		$(".main-nav-category-loop-title").addClass("main-nav-accordian").removeClass("main-nav-category-loop-title");
		$(".main-nav-category-loop-list").addClass("main-nav-category-loop-accordian-list").removeClass("main-nav-category-loop-list");
		// Main Mobile Nav Open
		$(".admin-show-mobile-nav a").click(function(e){
			$(this).parent().addClass("hidden");
			$(".admin-hide-mobile-nav").removeClass("hidden");
			$(".admin-main-navigation").removeClass("admin-mobile-nav-hidden");
			$(".main-nav-accordian").unbind( "click" );
			$('.main-nav-accordian.current').parent().find(".main-nav-category-loop-accordian-list").show();
			// Create a radio button effect
			$('.main-nav-accordian').bind('click',function() {
				var self = $(this);
				self.addClass('tab-open');
				self.parent().siblings().children().removeClass("tab-open");
				self.next('div.main-nav-category-loop-accordian-list').show(400);
				self.parent().siblings().children().next().hide(400);
				return false;
			});
			e.preventDefault();
		});
		// Main Mobile Nav Close
		$(".admin-hide-mobile-nav a").click(function(e){
			$(".main-nav-accordian").unbind( "click" ).removeClass("tab-open");
			$(this).parent().addClass("hidden");
			$(".admin-show-mobile-nav").removeClass("hidden");
			$(".admin-main-navigation").addClass("admin-mobile-nav-hidden");
			$(".main-nav-category-loop-accordian-list").removeAttr("style");
			e.preventDefault();
		});
    }
    if ($(window).width() >= 1001) {
		$(".admin-hide-mobile-nav a").parent().addClass("hidden");
		$(".admin-show-mobile-nav").removeClass("hidden");
		$(".admin-main-navigation").addClass("admin-mobile-nav-hidden");
		$(".main-nav-accordian").unbind( "click" ).removeClass("tab-open").addClass("main-nav-category-loop-title").removeClass("main-nav-accordian");
		$(".main-nav-category-accordian-loop").addClass("main-nav-category-loop").removeClass("main-nav-category-accordian-loop");
		$(".main-nav-category-loop-accordian-list").removeAttr("style").addClass("main-nav-category-loop-list").removeClass("main-nav-category-loop-accordian-list");
    }
    if ($(window).width() >= 1121) {
		$(".admin-mobile-only-click-menu-button-close").addClass("hidden").removeClass("open");
		$(".admin-mobile-only-click-menu-button-close").parent().parent().find(".admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		$(".admin-mobile-only-click-menu-button-close").parent().parent().parent().find(".admin-mobile-only-click-menu-content").removeAttr("style");
	}
}
$(window).load(PCViewUpdate);
$(window).resize(PCViewUpdate);
