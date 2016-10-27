// JavaScript Document
// Hide Header on onscroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
	'use strict';
    didScroll = true;
});
setInterval(function() {
	'use strict';
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
// Header Main Menu Controls
$.fn.headerMainNav = function(){ 
	'use strict';
	var headerWrapWidth = $(".header-wrap").width();
	var titleWidth = $(".title").width();
	var headerOverflowNav = $(".header-mainnav-overflow-menu").innerWidth();
	var headerSearchNav = $(".header-mainnav-search-menu").innerWidth();
	var headerAccountNav = $(".header-mainnav-account-menu").innerWidth();
	var headerWrap = headerWrapWidth - (headerOverflowNav + titleWidth + headerSearchNav + headerAccountNav);
	var headerNav = $(".header-mainnav-menu").innerWidth();
	//var headerNavFirstChild = $(".header-mainnav-menu li:first-child").innerWidth();
	var headerNavLastChild = $(".header-mainnav-menu li:last-child").innerWidth();
	if ((headerWrap - headerNav) < 0){
		$(".header-mainnav-menu li:last-child").queue(function(){
			$(".header-mainnav-overflow-menu").removeClass("hidden").addClass("global-table-cell");
			var headerOverflowNavCell = $(".header-mainnav-overflow-menu-button");
			$(".header-mainnav-overflow-menu").css('width', (headerOverflowNavCell.innerWidth()));
			$(this).prependTo(".header-mainnav-overflow-items").dequeue();
		});
		return false;
	}
	if ((headerWrap - headerNav) > headerNavLastChild){
		$(".header-mainnav-overflow-items li:first-child").queue(function(){
			$(this).appendTo(".header-mainnav-menu").dequeue();
		});
		return false;
	}
	return true;
};
// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
	keyboardControl: true,
	grabCursor: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	pagination: '.swiper-pagination',
	paginationClickable: true,
	autoHeight: true,
	// Disable preloading of all images
	preloadImages: false,
	// Enable lazy loading
	lazyLoadingInPrevNext: true,
	lazyLoadingInPrevNextAmount: 1,
	lazyLoading: true,
	onSlideChangeStart: function() {
		'use strict';
    	function pauseVideoVimeo(frame) {
			frame.each( function() {
				var url = $(this).attr('src').split('?')[0];
				this.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), url);
			});
		}
		$(".video-ad-vimeo").each(function() {
			var elementPause = $(this).find("iframe");
			pauseVideoVimeo(elementPause);
			var newsStreamContainerTop = $(".news-stream-container-top").outerHeight();
			var newsStreamContainerBottom = $(".news-stream-container-bottom").innerHeight();
			var newsStreamContainerMiddle = $(".swiper-container").height();
			var newsStreamContainerMiddleSum = newsStreamContainerMiddle - (newsStreamContainerTop + newsStreamContainerBottom);
			$(".news-stream-container-middle").css('height', (newsStreamContainerMiddleSum));
		});
	},
	onSlideChangeEnd: function() {
		'use strict';
    	function playVideoVimeo(frame) {
			frame.each( function() {
				var url = $(this).attr('src').split('?')[0];
				this.contentWindow.postMessage(JSON.stringify({ method: 'play' }), url);
				this.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', 'value': '0' }), url);
			});
		}
		$(".video-ad-vimeo.swiper-slide-active").each(function() {
			var elementPlay = $(this).find("iframe");
			playVideoVimeo(elementPlay);
			var newsStreamContainerTop = $(".news-stream-container-top").outerHeight();
			var newsStreamContainerBottom = $(".news-stream-container-bottom").innerHeight();
			var newsStreamContainerMiddle = $(".swiper-container").height();
			var newsStreamContainerMiddleSum = newsStreamContainerMiddle - (newsStreamContainerTop + newsStreamContainerBottom);
			$(".news-stream-container-middle").css('height', (newsStreamContainerMiddleSum));
		});
	}
});
// jQuery
$(document).ready(function() {
	'use strict';
	// Add to Home Screen for mobile
	var _ath = addToHomescreen;
	// This is the special custom message for stock android, it has to be customized to your needs
	var athMessages = {
		samsungAndroid: 'Custom message for Samsung Android. Click the menu hardware button and blah blah blah. This is an icon if needed: %icon',
		stockAndroid: 'Custom message for stock Android. Click the menu hardware button and blah blah blah. This is an icon if needed: %icon'
	};
	// Add stock browser compatibility
	var _ua = window.navigator.userAgent;
	_ath.isAndroidBrowser = _ua.indexOf('Android') > -1 && !(/Chrome\/[.0-9]*/).test(_ua);
	_ath.isCompatible = _ath.isCompatible || _ath.isAndroidBrowser;
	if ( _ath.OS == 'unsupported' && _ath.isAndroidBrowser ) {
		// additionally we check for some Samsung devices (not strictly needed)
		_ath.OS = (/ (GT-I9|GT-P7|SM-T2|GT-P5|GT-P3|SCH-I8)/).test(_ua) ? 'samsungAndroid' : 'stockAndroid';
	}
	_ath({
		message: _ath.OS in athMessages ? athMessages[_ath.OS] : '',
		// the followings are just for debug, customize the options to your needs
		skipFirstVisit: false,
		displayPace: false
		//debug: true
		
		// The optimal setting for the go live are as follows, remove all of the above controllers...
		// skipFirstVisit: true,
		// maxDisplayCount: 1
	});
	// Categories - Toggle Sub-categories
	$(".header-mainnav-overflow-menu-button").click(function() {
		$(".all-sub-sections-container").find(".tpns-one-add-property").removeClass("hidden");
		$(".all-sub-sections-container").find(".tpns-one-close").addClass("hidden");
		$(".all-sub-sections-container, .header-mainnav-search-button").removeClass("active");
		$(".p-ad-middle-image").removeClass("hidden");
		$(".all-categories-container").addClass("hidden");
		$(".header-mainnav-search-button").parent().parent().find(".header-mainnav-search-container").addClass("hidden");
		$(".header-mainnav-search-button").find(".tpns-one-search").removeClass("hidden");
		$(".header-mainnav-search-button").find(".tpns-one-close").addClass("hidden");
		$(this).parent().parent().find(".header-mainnav-overflow-items").toggleClass("hidden");
		$(this).toggleClass("active");
		$(this).find(".tpns-one-mobile-menu, .tpns-one-close").toggleClass("hidden");
	});
	// Main Nav Search - Toggle
	$(".header-mainnav-search-button").click(function() {
		$(".all-sub-sections-container").find(".tpns-one-add-property").removeClass("hidden");
		$(".all-sub-sections-container").find(".tpns-one-close").addClass("hidden");
		$(".all-sub-sections-container, .header-mainnav-overflow-menu-button").removeClass("active");
		$(".p-ad-middle-image").removeClass("hidden");
		$(".all-categories-container").addClass("hidden");
		$(".header-mainnav-overflow-menu-button").parent().parent().find(".header-mainnav-overflow-items").addClass("hidden");
		$(".header-mainnav-overflow-menu-button").find(".tpns-one-mobile-menu").removeClass("hidden");
		$(".header-mainnav-overflow-menu-button").find(".tpns-one-close").addClass("hidden");
		$(".breaking-news-header-outer-container").stop().fadeOut();
		$(this).parent().parent().find(".header-mainnav-search-container").toggleClass("hidden");
		$(this).toggleClass("active");
		$(this).find(".tpns-one-search, .tpns-one-close").toggleClass("hidden");
	});
	// Remove Breaking News
	$(".breaking-news-header-outer-container").delay(8000).fadeOut().parent().find(".tag-header-breaking-news").addClass("global-table-cell").removeClass("hidden");
	// Whilst visible close Breaking News
	$(".breaking-news-close").click(function() {
		$(".breaking-news-header-outer-container").stop().fadeOut();
	});
	// Show Breaking News again after being hidden
	$(".breaking-news-header-symbol").click(function() {
		$(".header-mainnav-overflow-menu-button").parent().parent().find(".header-mainnav-overflow-items").addClass("hidden");
		$(".header-mainnav-overflow-menu-button, .all-sub-sections-container").removeClass("active");
		$(".header-mainnav-overflow-menu-button").find(".tpns-one-mobile-menu").removeClass("hidden");
		$(".header-mainnav-overflow-menu-button").find(".tpns-one-close").addClass("hidden");
		$(".all-sub-sections-container").find(".tpns-one-add-property").removeClass("hidden");
		$(".all-sub-sections-container").find(".tpns-one-close").addClass("hidden");
		$(".p-ad-middle-image").removeClass("hidden");
		$(".all-categories-container").addClass("hidden");
		$(".breaking-news-header-outer-container").fadeIn().delay(8000).fadeOut();
	});
	// All Categories Menu
	$(".all-sub-sections-container").click(function() {
		$(".header-mainnav-overflow-menu-button").parent().parent().find(".header-mainnav-overflow-items").addClass("hidden");
		$(".header-mainnav-overflow-menu-button").removeClass("active");
		$(".header-mainnav-overflow-menu-button").find(".tpns-one-mobile-menu").removeClass("hidden");
		$(".header-mainnav-overflow-menu-button").find(".tpns-one-close").addClass("hidden");
		$(this).find(".tpns-one-add-property, .tpns-one-close").toggleClass("hidden");
		$(this).toggleClass("active");
		$(".current-sub-sections-container").find("p").toggleClass("hidden");
		$(".p-ad-middle-image, .all-categories-container").toggleClass("hidden");
		$("html, body").animate({ scrollTop: 0 },{duration:'slow', easing:'linear', queue: false });
	});
	// All Categories Inner Switch
	$(".all-categories-switch").click(function() {
		$(".all-sub-sections-container").find(".tpns-one-add-property").toggleClass("hidden");
		$(".all-sub-sections-container").find(".tpns-one-close").toggleClass("hidden");
		$(".all-sub-sections-container").toggleClass("active");
		$(".p-ad-middle-image, .all-categories-container").toggleClass("hidden");
	});
	
});

// Check the width of the window and do...
function PCViewUpdate() {
	'use strict';
	// Initialise Header Main Menu Controls on a per list item basis
	$(".header-mainnav li, .header-mainnav-overflow-menu li").each(function() {
		$(this).headerMainNav();
	});
	$(".header-mainnav-overflow-items:not(:has(li))").parent().parent().parent().addClass("hidden").removeClass("global-table-cell").removeAttr("style");
	if ($(window).width() <= 500) {
		$(".header-mainnav-menu li").queue(function(){
			$(this).each(function() {
				$(this).prependTo(".header-mainnav-overflow-items").dequeue();
			});
		});
		return false;
	}
	var newsStreamContainerTop = $(".news-stream-container-top").outerHeight();
	var newsStreamContainerBottom = $(".news-stream-container-bottom").innerHeight();
	var newsStreamContainerMiddle = $(".swiper-container").height();
	var newsStreamContainerMiddleSum = newsStreamContainerMiddle - (newsStreamContainerTop + newsStreamContainerBottom);
	$(".news-stream-container-middle").css('height', (newsStreamContainerMiddleSum));
	// Contain the index category seperator advertisement
	var indexCategoryAdSeperator = $(".per-category-seperator-ad-container iframe").width();
	$(".per-category-seperator-ad-container a").css('width', (indexCategoryAdSeperator));
}
$(window).load(PCViewUpdate);
$(window).resize(PCViewUpdate);
