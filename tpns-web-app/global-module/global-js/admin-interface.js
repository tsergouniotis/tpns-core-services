// JavaScript Document
// Add decimal points in a number to make it more legible
$.fn.digits = function(){ 
	'use strict';
	return this.each(function(){ 
		$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
	});
};
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
	// Global Dashboard Navigation Open
	$(".admin-global-controllers-tab-show").click(function(e) {
		// Test if another item is open and close it
		$(".main-nav-accordian").unbind( "click" ).removeClass("tab-open");
		$(".admin-hide-mobile-nav a").parent().addClass("hidden");
		$(".admin-show-mobile-nav").removeClass("hidden");
		$(".admin-main-navigation").addClass("admin-mobile-nav-hidden");
		$(".main-nav-category-loop-accordian-list, .admin-mobile-only-click-menu-content").removeAttr("style");
		$(".admin-global-controllers-tab-hide, .admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close, .admin-mobile-only-click-menu-button-close").addClass("hidden").removeClass("open");
		$(".admin-global-controllers-tab-content, .admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(".admin-global-controllers-tab-show, .admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open, .admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		// End Test
		$(this).addClass("hidden").hide();
		$(this).parent().parent().find(".admin-global-controllers-tab-hide").removeClass("hidden").addClass("open");
		$(this).parent().parent().parent().find(".admin-global-controllers-tab-content").removeClass("hidden").show();
		e.preventDefault();
	});
	// Global Dashboard Navigation Close
	$(".admin-global-controllers-tab-hide").click(function(e) {
		$(this).addClass("hidden").removeClass("open");
		$(this).parent().parent().find(".admin-global-controllers-tab-show").removeClass("hidden").removeAttr("style");
		$(this).parent().parent().parent().find(".admin-global-controllers-tab-content").removeAttr("style").addClass("hidden");
		e.preventDefault();
	});
	// Global Dashboard Navigation Close outside of open nav container
	$(".admin-left-column, .admin-logo-nav-container, .admin-bi-from-calendar input, .input-reset-button").click(function() {
		/*, .admin-right-column, .admin-local-controllers     .main-nav-category-loop-accordian-list, */
		$(".admin-mobile-only-click-menu-content").removeAttr("style");
		$(".admin-global-controllers-tab-hide, .admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close, .admin-mobile-only-click-menu-button-close").addClass("hidden").removeClass("open");
		$(".admin-global-controllers-tab-content, .admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(".admin-global-controllers-tab-show, .admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open, .admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
	});
	// Admin Global Click Menu Open
	$(".admin-click-menu-button-pc-open").click(function(e) {
		// Test if another item is open and close it
		$(".main-nav-accordian").unbind( "click" ).removeClass("tab-open");
		$(".admin-hide-mobile-nav a").parent().addClass("hidden");
		$(".admin-show-mobile-nav").removeClass("hidden");
		$(".admin-main-navigation").addClass("admin-mobile-nav-hidden");
		$(".main-nav-category-loop-accordian-list, .admin-mobile-only-click-menu-content").removeAttr("style");
		$(".admin-global-controllers-tab-hide, .admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close, .admin-mobile-only-click-menu-button-close").addClass("hidden").removeClass("open");
		$(".admin-global-controllers-tab-content, .admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(".admin-global-controllers-tab-show, .admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open, .admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		// End Test
		$(this).addClass("hidden").hide();
		$(this).parent().parent().find(".admin-click-menu-button-pc-close").removeClass("hidden").addClass("open");
		$(this).parent().parent().parent().find(".admin-click-menu-content").removeClass("hidden").show();
		e.preventDefault();
	});
	// Admin Global Click Sub Menu Open
	$(".admin-click-sub-menu-button-pc-open").click(function(e) {
		// Test if another item is open and close it
		$(".main-nav-accordian").unbind( "click" ).removeClass("tab-open");
		$(".admin-hide-mobile-nav a").parent().addClass("hidden");
		$(".admin-show-mobile-nav").removeClass("hidden");
		$(".admin-main-navigation").addClass("admin-mobile-nav-hidden");
		$(".main-nav-category-loop-accordian-list, .admin-mobile-only-click-menu-content").removeAttr("style");
		$(".admin-global-controllers-tab-hide, .admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close, .admin-mobile-only-click-menu-button-close").addClass("hidden").removeClass("open");
		$(".admin-global-controllers-tab-content, .admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(".admin-global-controllers-tab-show, .admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open, .admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		// End Test
		$(this).addClass("hidden").hide();
		$(this).parent().parent().find(".admin-click-sub-menu-button-pc-close").removeClass("hidden").addClass("open");
		$(this).parent().parent().parent().find(".admin-click-sub-menu-content").removeClass("hidden").show();
		e.preventDefault();
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
				$(".filter-active-first-seperator").removeClass("hidden");
				$(".admin-click-menu-button-pc-close").trigger("click");
				e.stopPropogation();
			} else {
				$(".filter-active-first-seperator").addClass("hidden");
			}
		}
		// If this is the Category Filter List being clicked then add results in the relevant div
		if ( $(this).parent().parent().parent().find(".admin-bi-category-list").length ) {
			$(this).closest("body").find(".filter-inactive").addClass("hidden");
			$(this).closest("body").find(".filter-active").removeClass("hidden").find(".filter-active-category").addClass("category-active").html($(this).find("u, span").clone());
			if($(".filter-active-reporter").hasClass("reporter-active")) {
				$(".filter-active-first-seperator").removeClass("hidden");
			} else {
				$(".filter-active-first-seperator").addClass("hidden");
			}
		}
		// If this is the Sub Category Filter List being clicked then add results in the relevant div
		if ( $(this).parent().parent().parent().find(".admin-bi-sub-category-list").length ) {
			$(this).closest("body").find(".filter-active-sub-category-container").removeClass("hidden").find(".filter-active-sub-category").html($(this).find("u, span").clone());
		} else {
			$(this).closest("body").find(".filter-active-sub-category-container").addClass("hidden");
		}
		if ( $(this).find("u").length ) {
			$(this).parent().parent().parent().parent().find('.selected-admin-bi-reporter-image').html($(this).find("u").clone());
		}
		$(this).parent().parent().parent().parent().find(".admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close").addClass("hidden").removeClass("open");
		$(this).parent().parent().parent().parent().find(".admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(this).parent().parent().parent().parent().find(".admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open").removeClass("hidden").removeAttr("style");
	});
	// Admin Global Click Menu Close
	$(".admin-click-menu-button-pc-close").click(function(e) {
		$(this).addClass("hidden").removeClass("open");
		$(this).parent().parent().find(".admin-click-menu-button-pc-open").removeClass("hidden").removeAttr("style");
		$(this).parent().parent().parent().find(".admin-click-menu-content").removeAttr("style").addClass("hidden");
		e.preventDefault();
	});
	// Admin Global Click Sub Menu Close
	$(".admin-click-sub-menu-button-pc-close").click(function(e) {
		$(this).addClass("hidden").removeClass("open");
		$(this).parent().parent().find(".admin-click-sub-menu-button-pc-open").removeClass("hidden").removeAttr("style");
		$(this).parent().parent().parent().find(".admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		e.preventDefault();
	});
	// Admin Global Mobile Only Click Menu Open
	$(".admin-mobile-only-click-menu-button-open").click(function(e) {
		// Test if another item is open and close it
		$(".main-nav-accordian").unbind( "click" ).removeClass("tab-open");
		$(".admin-hide-mobile-nav a").parent().addClass("hidden");
		$(".admin-show-mobile-nav").removeClass("hidden");
		$(".admin-main-navigation").addClass("admin-mobile-nav-hidden");
		$(".main-nav-category-loop-accordian-list, .admin-mobile-only-click-menu-content").removeAttr("style");
		$(".admin-global-controllers-tab-hide, .admin-click-menu-button-pc-close, .admin-click-sub-menu-button-pc-close, .admin-mobile-only-click-menu-button-close").addClass("hidden").removeClass("open");
		$(".admin-global-controllers-tab-content, .admin-click-menu-content, .admin-click-sub-menu-content").removeAttr("style").addClass("hidden");
		$(".admin-global-controllers-tab-show, .admin-click-menu-button-pc-open, .admin-click-sub-menu-button-pc-open, .admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		// End Test
		$(this).addClass("hidden").hide();
		$(this).parent().parent().find(".admin-mobile-only-click-menu-button-close").removeClass("hidden").addClass("open");
		$(this).parent().parent().parent().find(".admin-mobile-only-click-menu-content").show();
		e.preventDefault();
	});
	// Admin Global Mobile Only Click Sub Menu Close
	$(".admin-mobile-only-click-menu-button-close").click(function(e) {
		$(this).addClass("hidden").removeClass("open");
		$(this).parent().parent().find(".admin-mobile-only-click-menu-button-open").removeClass("hidden").removeAttr("style");
		$(this).parent().parent().parent().find(".admin-mobile-only-click-menu-content").removeAttr("style");
		e.preventDefault();
	});
	// Date Picker Settings
	$(".admin-global-bi-datepicker, .datepicker-here").datepicker({
		maxDate: new Date(),
		range: true,
		position: "bottom center"
	});
	// Reset Date Picker Input Field Value
	$('.input-reset-button').each(function(){
		$('.input-reset-button').click(function(){
			$(this).parent().find('input[type="text"]').val('');
		});
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
