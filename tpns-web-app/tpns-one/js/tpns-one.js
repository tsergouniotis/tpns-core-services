// JavaScript Document
// Hide Header on onscroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function() {
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
    if(Math.abs(lastScrollTop - st) <= delta) {
        return;
	}
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
$.fn.headerMainNav = function() { 
	'use strict';
	var headerWrapWidth = $(".header-wrap").width();
	var titleWidth = $(".title").width();
	var headerOverflowNav = $(".header-mainnav-overflow-menu").innerWidth();
	var headerSearchNav = $(".header-mainnav-search-menu").innerWidth();
	var headerAccountNav = $(".header-mainnav-account-menu").innerWidth();
	var headerWrap = headerWrapWidth - (headerOverflowNav + titleWidth + headerSearchNav + headerAccountNav);
	var headerNav = $(".header-mainnav-menu").innerWidth();
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
// Format a number from i.e.: 1500 to 1.5k
$.fn.format = function(){
	'use strict';
    this.text(function(_, number) {
		// Format the number by truncating and addiing a decimel seperator showing i.e.: two numbers after the decimel, decPlaces to Math.pow(10, 2)
        var decPlaces = Math.pow(10, 1);
		// for numbers larger than a billion add the following after b in abbrev "t", "qd", "qi", "sx", "sp", "oc", "n", "d"
		// remember to comma seperate them
        var abbrev = ["k", "m", "b"];
        for (var i = abbrev.length-1; i>=0; i--){
            var size = Math.pow(10, (i+1) * 3);
            if(size <= number){
                number = Math.round(number*decPlaces/size)/decPlaces;
                if((number === 1000) && (i < abbrev.length - 1)){
                    number = 1;
                    i++;
                }
                number += abbrev[i];
                break;
            }           
        }
        return number;
    });
};
$('.formatted-number').format();
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
			var newsStreamSliderContainerTop = $(".news-stream").find(".news-stream-container-top").outerHeight();
			var newsStreamSliderContainerBottom = $(".news-stream").find(".news-stream-container-bottom").innerHeight();
			var newsStreamSliderContainerMiddle = $(".swiper-container").height();
			var editorsChoiceSliderContainerTop = $(".news-stream").find(".editors-choice-container-top").outerHeight();
			var editorsChoiceSliderContainerBottom = $(".news-stream").find(".editors-choice-container-bottom").innerHeight();
			var editorsChoiceSliderContainerMiddle = $(".swiper-container").height();
			var newsStreamSliderContainerMiddleSum = newsStreamSliderContainerMiddle - (newsStreamSliderContainerTop + newsStreamSliderContainerBottom);
			var editorsChoiceSliderContainerMiddleSum = editorsChoiceSliderContainerMiddle - (editorsChoiceSliderContainerTop + editorsChoiceSliderContainerBottom);
			$(".news-stream").find(".news-stream-container-middle").css('height', (newsStreamSliderContainerMiddleSum));
			$(".news-stream").find(".editors-choice-container-middle").css('height', (editorsChoiceSliderContainerMiddleSum));
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
			var newsStreamSliderContainerTop = $(".news-stream").find(".news-stream-container-top").outerHeight();
			var newsStreamSliderContainerBottom = $(".news-stream").find(".news-stream-container-bottom").innerHeight();
			var newsStreamSliderContainerMiddle = $(".swiper-container").height();
			var editorsChoiceSliderContainerTop = $(".news-stream").find(".editors-choice-container-top").outerHeight();
			var editorsChoiceSliderContainerBottom = $(".news-stream").find(".editors-choice-container-bottom").innerHeight();
			var editorsChoiceSliderContainerMiddle = $(".swiper-container").height();
			var newsStreamSliderContainerMiddleSum = newsStreamSliderContainerMiddle - (newsStreamSliderContainerTop + newsStreamSliderContainerBottom);
			var editorsChoiceSliderContainerMiddleSum = editorsChoiceSliderContainerMiddle - (editorsChoiceSliderContainerTop + editorsChoiceSliderContainerBottom);
			$(".news-stream").find(".news-stream-container-middle").css('height', (newsStreamSliderContainerMiddleSum));
			$(".news-stream").find(".editors-choice-container-middle").css('height', (editorsChoiceSliderContainerMiddleSum));
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
	if ( _ath.OS === 'unsupported' && _ath.isAndroidBrowser ) {
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
	// Contain the index category seperator advertisement
	var indexCategoryAdSeperatorWidth = $(".per-category-seperator-ad-container iframe").width();
	var indexCategoryAdSeperatorSum = indexCategoryAdSeperatorWidth / 8.088888888888889;
	$(".per-category-seperator-ad-container p").css('height', (indexCategoryAdSeperatorSum));
	// Show/hide index content per category subcategories
	$(".index-subcategories-button").click(function() {
		$(this).find(".tpns-one-mobile-menu").toggleClass("hidden");
		$(this).find(".tpns-one-close").toggleClass("hidden");
		$(this).toggleClass("active");
		$(this).parent().find(".index-subcategories").toggleClass("hidden");
	});
	// Add position dependant on Sidebar Widget Order
	$(".per-category-sidebar-container").children().each(function() {
		if ($(this).is(':nth-child(1)') )	{
			$(this).addClass("position-one");
		}
		if ($(this).is(':nth-child(2)') )	{
			$(this).addClass("position-two");
		}
		if ($(this).is(':nth-child(3)') )	{
			$(this).addClass("position-three");
		}
	});
	// Do something dependant on Large Social Button li frequency
	$(".social-follow-buttons-large").each(function() {
		if ($(this).children('li').size() === 1 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-one");
		}
		if ($(this).children('li').size() === 2 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-two");
		}
		if ($(this).children('li').size() === 3 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-three");
		}
		if ($(this).children('li').size() === 4 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-four");
		}
		if ($(this).children('li').size() === 5 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-five");
		}
		if ($(this).children('li').size() === 6 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-six");
		}
		if ($(this).children('li').size() === 7 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-seven");
		}
		if ($(this).children('li').size() === 8 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-eight");
		}
		if ($(this).children('li').size() === 9 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-nine");
		}
		if ($(this).children('li').size() === 10 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-ten");
		}
		if ($(this).children('li').size() === 11 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-eleven");
		}
		if ($(this).children('li').size() === 12 )	{
			$(this).addClass("social-follow-buttons-large-equal-to-twelve");
		}
	});
	// Index per category hide button
	$(".index-category-hide-button").click(function() {
		$(".index-subcategories-button").find(".tpns-one-mobile-menu").removeClass("hidden");
		$(".index-subcategories-button").find(".tpns-one-close").addClass("hidden");
		$(".index-subcategories-button").removeClass("active");
		$(".index-subcategories-button").parent().find(".index-subcategories").addClass("hidden");
		$(this).parent().parent().parent().parent().parent().parent().parent().find(".per-category-open-container").find(".per-category-content-container").addClass("hidden");
		$(this).parent().parent().parent().parent().parent().parent().parent().find(".per-category-open-container").find(".per-category-sidebar-container").addClass("per-category-closed-container-content-sidebar");
		$(this).parent().parent().parent().parent().parent().parent().parent().find(".per-category-closed-container").removeClass("hidden");
		// Do something with the Mailchimp Newsletter
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find(".mailchimp-newsletter-container").each(function() {
			if ($(this).hasClass("position-one")) {
				$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
					var mailChimpWithBillboardInPositionTwoDefaultSlot = $(".social-follow-container").height();
					$(".mailchimp-newsletter-container").css('min-height', ((mailChimpWithBillboardInPositionTwoDefaultSlot)+'px'));
					$(this).off(e);
					if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
						$(".mailchimp-newsletter-container").removeAttr("style");
					}
				});
			}
			if ($(this).hasClass("position-two")) {
				if ($(".billboard-container").hasClass("position-one")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var mailChimpPositionTwoWithBillboardInPositionOne = $(".billboard-container").height();
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpPositionTwoWithBillboardInPositionOne)+'px'));
						$(this).off(e);
						if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
							$(".mailchimp-newsletter-container").removeAttr("style");
						}
					});
				}
			}
		});
		// Do something with the Billboard
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find(".billboard-container").each(function() {
			if ($(this).hasClass("position-one")) {
				$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
					var BillboardWithSocialLargeInPositionTwo = $(".social-follow-container").height();
					$(".billboard-inner-container").css('min-height', ((BillboardWithSocialLargeInPositionTwo*1-17)+'px'));
					$(this).off(e);
				});
			}
			if ($(this).hasClass("position-two")) {
				$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
					var mailChimpPositionOneWithBillboardInPositionTwo = $(".billboard-container").height();
					$(".mailchimp-newsletter-container").css('min-height', ((mailChimpPositionOneWithBillboardInPositionTwo)+'px'));
					$(this).off(e);
					if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
						$(".mailchimp-newsletter-container").removeAttr("style");
					}
				});
			}
		});
		// Do something if the user opts to have Large Social Buttons
		$(this).parent().parent().parent().parent().parent().parent().parent().find(".social-follow-buttons-large").each(function() {
			// Do something dependant on Large Social Button li frequency
			if ($(this).children('li').size() <= 2 ) {
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-default-lt-two");
						}
					}
				}
			}
			if ($(this).children('li').size() <= 3 ) {
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-four")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-four-gt-six").removeClass("billboard-inner-container-slot-four-gt-nine").removeClass("billboard-inner-container-slot-four-gt-three").addClass("billboard-inner-container-slot-four-lt-three");
						}
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-two")) {
							$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-two-lte-three");
						}
					}
				}
			}
			if ($(this).children('li').size() <= 4 ) {
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-six")) {
							$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-six-lte-four");
						}
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-five")) {
							$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-five-lte-four");
						}
					}
				}
			}
			if ($(this).children('li').size() <= 6 ) {
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".billboard-inner-container").addClass("sidebar-position-one-lt-six-large-social-buttons-billboard-control");
							$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
								var BillboardWithSocialLargeInPositionTwoSlotDefault = $(".social-follow-container").height();
								$(".billboard-inner-container").css('min-height', ((BillboardWithSocialLargeInPositionTwoSlotDefault*1-17)+'px'));
								$(this).off(e);
							});
						}
						if ($(".billboard-container").hasClass("sidebar-slot-one")) {
							$(this).parent().parent().find(".billboard-inner-container").addClass("sidebar-triple-slot-one-lt-three-large-social-buttons-billboard-control");
							$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
								var BillboardWithSocialLargeInPositionTwoSlotOne = $(".social-follow-container").height();
								$(".billboard-inner-container").css('min-height', ((BillboardWithSocialLargeInPositionTwoSlotOne*1-17)+'px'));
								$(this).off(e);
							});
						}
					}
					if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
						$(".mailchimp-newsletter-container").removeAttr("style");
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("sidebar-slot-three")) {
						$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-three-lt-six");
					}
				}
			}
			if ($(this).children('li').size() > 2 )	{
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-one")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
							var mailChimpContainerPositionOneSlotDefaultGTTwo = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionOneSlotDefaultGTTwo.height()*1.048)+'px'));
							$(this).off(e);
						});
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lt-two").addClass("billboard-inner-container-slot-default-gt-two");
						}
					}
				}
			}
			if ($(this).parent().parent().children(".sidebar-slot-one").size() === 3 ) {
				// Do something dependant on sidebar slot frequency
				$(this).parent().parent().addClass("sidebar-triple-slot-one");
				if ($(this).children("li").size() <= 12 ) {
					var socialLargeBillboardLTETwelve = $(".social-follow-container");
					$(this).parent().parent().find(".billboard-inner-container").addClass("billboard-inner-container-lte-twelve").css('min-height', ((socialLargeBillboardLTETwelve.height()*1.086-17)+'px'));
					$(this).parent().parent().find(".mailchimp-newsletter-container").css('min-height', ((socialLargeBillboardLTETwelve.height()*1.086)+'px'));
					if ($(this).parent().hasClass("position-two")) {
						if ($(".billboard-container").hasClass("position-one")) {
							$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-default-lte-twelve");
						}
					}
				}
				if ($(this).children("li").size() <= 9 ) {
					var socialLargeBillboardLTENine = $(".social-follow-container");
					$(this).parent().parent().find(".billboard-inner-container").removeClass("billboard-inner-container-lte-twelve").css('min-height', ((socialLargeBillboardLTENine.height()*1.078-17)+'px'));
					$(this).parent().parent().find(".mailchimp-newsletter-container").css('min-height', ((socialLargeBillboardLTENine.height()*1.078)+'px'));
					if ($(this).parent().hasClass("position-two")) {
						if ($(".billboard-container").hasClass("position-one")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lte-twelve").addClass("billboard-inner-container-slot-default-lte-nine");
						}
					}
				}
				if ($(this).children("li").size() <= 6 ) {
					$(".closed-container-billboard-inner-right-container").addClass("closed-container-billboard-inner-text-over-image");
					var socialLargeBillboardLTESix = $(".social-follow-container");
					$(this).parent().parent().find(".billboard-inner-container").addClass("billboard-inner-container-lte-six").css('min-height', ((socialLargeBillboardLTESix.height()*1.054-17)+'px'));
					$(this).parent().parent().find(".mailchimp-newsletter-container").css('min-height', ((socialLargeBillboardLTESix.height()*1.056)+'px'));
					if ($(this).parent().hasClass("position-two")) {
						if ($(".billboard-container").hasClass("position-one")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lte-twelve").removeClass("billboard-inner-container-slot-default-lte-nine");
						}
					}
				}
				if ($(this).children("li").size() <= 3 ) {
					$(".closed-container-billboard-inner-right-container").removeClass("closed-container-billboard-inner-text-over-image");
					$(this).parent().parent().find(".billboard-inner-container").removeAttr("style").addClass("sidebar-triple-slot-one-lt-three-large-social-buttons-billboard-control");
					$(this).parent().parent().find(".mailchimp-newsletter-container").removeAttr("style");
					if ($(this).parent().hasClass("position-two")) {
						if ($(".billboard-container").hasClass("position-one")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lte-twelve").removeClass("billboard-inner-container-slot-default-lte-nine");
						}
					}
				}
			}
			if ($(this).children('li').size() > 3 )	{
				if ($(this).parent().hasClass("sidebar-slot-three")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var mailChimpContainerSlotThreeGTThree = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotThreeGTThree.height()*1.056)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-four")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-four-gt-six").removeClass("billboard-inner-container-slot-four-gt-nine").addClass("billboard-inner-container-slot-four-gt-three");
						}
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-two")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-two-lt-three").addClass("billboard-inner-container-slot-two-gt-three");
						}
					}
				}
				if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
					$(".mailchimp-newsletter-container").removeAttr("style");
				}
			}
			if ($(this).children('li').size() > 4 )	{
				if ($(this).parent().hasClass("sidebar-slot-five")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var mailChimpContainerSlotFiveGTFour = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotFiveGTFour.height()*1.018)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("sidebar-slot-six")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var mailChimpContainerSlotSixGTFour = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotSixGTFour.height()*1.018)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-one")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
							var mailChimpContainerPositionOneSlotDefaultGTFour = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionOneSlotDefaultGTFour.height()*1.07)+'px'));
							$(this).off(e);
						});
					}
				}
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-six")) {
							$(this).parent().parent().find(".closed-container-billboard-container").addClass("billboard-inner-container-slot-six-gt-four");
						}
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lt-two").removeClass("billboard-inner-container-slot-default-gt-two").addClass("billboard-inner-container-slot-default-gt-four");
						}
						if ($(".billboard-container").hasClass("sidebar-slot-five")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-five-lte-four").addClass("billboard-inner-container-slot-five-gt-four");
							if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
								$(".mailchimp-newsletter-container").removeAttr("style");
							}
						}
					}
				}
			}
			if ($(this).children('li').size() > 6 )	{
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-one")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
							var mailChimpContainerPositionOneSlotDefaultGTSix = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionOneSlotDefaultGTSix.height()*1.076)+'px'));
							$(this).off(e);
						});
					}
				}
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-two")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
							var mailChimpContainerPositionTwoSlotDefaultGTSix = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionTwoSlotDefaultGTSix.height()*1.02)+'px'));
							$(this).off(e);
						});
					}
				}
				if ($(this).parent().hasClass("sidebar-slot-three")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var mailChimpContainerSlotThreeGTSix = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotThreeGTSix.height()*1.078)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("sidebar-slot-two")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var mailChimpContainerSlotTwoGTSix = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotTwoGTSix.height()*1.028)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".closed-container-billboard-inner-right-container").addClass("sidebar-position-one-gt-six-large-social-buttons-billboard-control");
							$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
								var BillboardWithSocialLargeInPositionTwoGTSixSlotDefault = $(".social-follow-container").height();
								$(".billboard-inner-container").css('min-height', ((BillboardWithSocialLargeInPositionTwoGTSixSlotDefault*1-10)+'px'));
								$(this).off(e);
							});
						}
						if ($(".billboard-container").hasClass("sidebar-slot-one")) {
							$(this).parent().parent().find(".closed-container-billboard-inner-left-container").addClass("billboard-inner-container-gte-six");
							$(this).parent().parent().find(".closed-container-billboard-inner-right-container").addClass("closed-container-billboard-inner-text-over-image");
							$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
								var BillboardWithSocialLargeInPositionTwoGTSixSlotOne = $(".social-follow-container").height();
								$(".billboard-inner-container").css('min-height', ((BillboardWithSocialLargeInPositionTwoGTSixSlotOne*1-10)+'px'));
								$(this).off(e);
							});
						}
						if ($(".billboard-container").hasClass("sidebar-slot-four")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-four-gt-three").addClass("billboard-inner-container-slot-four-gt-six");
							$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
								var BillboardSlotFourGTNineWithSocialLargeInPositionOne = $(".social-follow-container").height();
								$(".billboard-inner-container").css('min-height', ((BillboardSlotFourGTNineWithSocialLargeInPositionOne*1-17)+'px'));
								$(this).off(e);
							});
						}
					}
					if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
						$(".mailchimp-newsletter-container").removeAttr("style");
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lt-two").removeClass("billboard-inner-container-slot-default-gt-two").removeClass("billboard-inner-container-slot-default-gt-four").addClass("billboard-inner-container-slot-default-gt-six");
						}
						if ($(".billboard-container").hasClass("sidebar-slot-two")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-two-lte-three").removeClass("billboard-inner-container-slot-two-gt-three").addClass("billboard-inner-container-slot-two-gt-six");
						}
						if ($(".billboard-container").hasClass("sidebar-slot-three")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-three-lt-six");
							$(this).parent().parent().find(".closed-container-billboard-inner-left-container").addClass("billboard-inner-container-slot-three-gt-six");
							$(this).parent().parent().find(".closed-container-billboard-inner-right-container").addClass("billboard-inner-container-slot-three-gt-six-text-over-image");
						}
					}
				}
			}
			if ($(this).children('li').size() > 8 )	{
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-one")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
							var mailChimpContainerPositionOneSlotDefaultGTEight = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionOneSlotDefaultGTEight.height()*1.076)+'px'));
							$(this).off(e);
						});
					}
				}
				if ($(this).parent().hasClass("sidebar-slot-five")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
						var mailChimpContainerSlotFiveGTEight = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotFiveGTEight.height()*1.028)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("sidebar-slot-six")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
						var mailChimpContainerSlotSixGTEight = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotSixGTEight.height()*1.028)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-six")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-six-gt-four");
							$(this).parent().parent().find(".closed-container-billboard-inner-left-container").addClass("billboard-inner-container-slot-six-gte-eight");
							$(this).parent().parent().find(".closed-container-billboard-inner-right-container").addClass("billboard-inner-container-slot-six-gte-eight-text-over-image");
						}
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-default")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-default-lt-two").removeClass("billboard-inner-container-slot-default-gt-two").removeClass("billboard-inner-container-slot-default-gt-four").removeClass("billboard-inner-container-slot-default-gt-six").addClass("billboard-inner-container-slot-default-gt-eight");
						}
						if ($(".billboard-container").hasClass("sidebar-slot-five")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-five-lte-four").removeClass("billboard-inner-container-slot-five-gt-four");
							$(this).parent().parent().find(".closed-container-billboard-inner-left-container").addClass("billboard-inner-container-slot-five-gt-eight");
							$(this).parent().parent().find(".closed-container-billboard-inner-right-container").addClass("billboard-inner-container-slot-five-gt-eight-text-over-image");
						}
					}
				}
				if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
					$(".mailchimp-newsletter-container").removeAttr("style");
				}
			}
			if ($(this).children('li').size() >= 9 )	{
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-four")) {
							$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
								var BillboardSlotFourGTNineWithSocialLargeInPositionOne = $(".social-follow-container").height();
								$(".billboard-inner-container").css('min-height', ((BillboardSlotFourGTNineWithSocialLargeInPositionOne*1-17)+'px'));
								$(this).off(e);
							});
						}
					}
				}
			}
			if ($(this).children('li').size() > 9 )	{
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-one")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
							var mailChimpContainerPositionOneSlotDefaultGTNine = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionOneSlotDefaultGTNine.height()*1.084)+'px'));
							$(this).off(e);
						});
					}
				}
				if ($(this).parent().hasClass("sidebar-slot-three")) {
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
						var mailChimpContainerSlotThreeGTNine = $(".social-follow-container");
						$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerSlotThreeGTNine.height()*1.086)+'px'));
						$(this).off(e);
					});
				}
				if ($(this).parent().hasClass("position-one")) {
					if ($(".billboard-container").hasClass("position-two")) {
						if ($(".billboard-container").hasClass("sidebar-slot-four")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-four-lt-three").removeClass("billboard-inner-container-slot-four-gt-three").removeClass("billboard-inner-container-slot-four-gt-six").addClass("billboard-inner-container-slot-four-gt-nine");
						}
					}
				}
				if ($(this).parent().hasClass("position-two")) {
					if ($(".billboard-container").hasClass("position-one")) {
						if ($(".billboard-container").hasClass("sidebar-slot-two")) {
							$(this).parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-two-lte-three").removeClass("billboard-inner-container-slot-two-gt-three").removeClass("billboard-inner-container-slot-two-gt-six").addClass("billboard-inner-container-slot-two-gt-nine");
						}
					}
				}
				if ($(".mailchimp-newsletter-container").hasClass("sidebar-slot-full")) {
					$(".mailchimp-newsletter-container").removeAttr("style");
				}
			}
			if ($(this).children('li').size() > 10 ) {
				if ($(this).parent().hasClass("sidebar-slot-default")) {
					if ($(this).parent().parent().find(".mailchimp-newsletter-container").hasClass("position-one")) {
						$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e) {
							var mailChimpContainerPositionOneSlotDefaultGTTen = $(".social-follow-container");
							$(".mailchimp-newsletter-container").css('min-height', ((mailChimpContainerPositionOneSlotDefaultGTTen.height()*1.086)+'px'));
							$(this).off(e);
						});
					}
				}
			}
		});
		// Do something if the user opts to have Small Social Buttons
		$(this).parent().parent().parent().parent().parent().parent().parent().find(".social-follow-buttons-small").each(function() {
			$(this).parent().parent().addClass("global-closed-small-mailchimp-newsletter");
			// Do something dependant on Large Social Button li frequency
			if ($(this).parent().parent().children(".sidebar-slot-one").size() === 3 ) {
				$(this).addClass("sidebar-triple-slot-one");
				if ($(".social-follow-buttons-small").children("li").size() <= 10 ) {
					$(this).removeClass("global-closed-small-mailchimp-newsletter");
					$(".per-category-open-container").removeClass("closed-small-mailchimp-newsletter");
					$(".mailchimp-newsletter-container").removeClass("per-category-sidebar-container-more-than-eight");
					$(this).parent().addClass("closed-small-mailchimp-newsletter");
					$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
						var socialSmallBillboardLTETen = $(".social-follow-container");
						$(this).find(".billboard-inner-container").css('min-height', ((socialSmallBillboardLTETen.height()*1.08-17)+'px'));
						$(this).find(".mailchimp-newsletter-container").css('min-height', ((socialSmallBillboardLTETen.height()*1.08)+'px'));
						$(this).off(e);
					});
				}
			}
			if ($(this).children('li').size() > 8 )	{
				$(this).parent().addClass("closed-small-mailchimp-newsletter");
				$(".mailchimp-newsletter-container").addClass("per-category-sidebar-container-more-than-eight");
				$(".per-category-closed-container-content-sidebar").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(e){
					var mailChimpContainerGTEight = $(".per-category-sidebar-container-more-than-eight").height(174);
					$(".per-category-sidebar-container-more-than-eight").css('height', (mailChimpContainerGTEight.height()));
					$(this).off(e);
				});
			}
		});
		$(".per-category-closed-container-content-sidebar").find(".editors-choice-container-middle").removeAttr("style");
		$(".per-category-closed-container-content-sidebar").find(".news-stream-container-middle").removeAttr("style");
				
		
		
		/*
		// Type1 = 3 x sidebar-slot-two
		$(this).parent().parent().parent().parent().parent().parent().parent().find(".per-category-closed-container-content-sidebar").each(function() {
			if ($(this).children(".sidebar-slot-one").size() === 3 ) {
				$(this).addClass("sidebar-triple-slot-one");
				if ($(".social-follow-buttons-small").children("li").size() <= 10 ) {
					$(this).removeClass("global-closed-small-mailchimp-newsletter");
					$(".per-category-open-container").removeClass("closed-small-mailchimp-newsletter");
					$(".mailchimp-newsletter-container").removeClass("per-category-sidebar-container-more-than-eight");
					$(this).addClass("banana");
					$(this).parent().addClass("closed-small-mailchimp-newsletter");
					var socialSmallBillboardLTETen = $(".social-follow-container");
					$(this).find(".billboard-inner-container").css('min-height', ((socialSmallBillboardLTETen.height()*1.08-17)+'px'));
					$(this).find(".mailchimp-newsletter-container").css('min-height', ((socialSmallBillboardLTETen.height()*1.08)+'px'));
				}
				if ($(".social-follow-buttons-large").children("li").size() <= 9 ) {
					var socialLargeBillboardLTENine = $(".social-follow-container");
					$(this).find(".billboard-inner-container").css('min-height', ((socialLargeBillboardLTENine.height()*1.08-17)+'px'));
					$(this).find(".mailchimp-newsletter-container").css('min-height', ((socialLargeBillboardLTENine.height()*1.08)+'px'));
				}
				if ($(".social-follow-buttons-large").children("li").size() <= 6 ) {
					$(".closed-container-billboard-inner-right-container").addClass("closed-container-billboard-inner-text-over-image");
					var socialLargeBillboardLTESix = $(".social-follow-container");
					$(this).find(".billboard-inner-container").css('min-height', ((socialLargeBillboardLTESix.height()*1.08-17)+'px'));
					$(this).find(".mailchimp-newsletter-container").css('min-height', ((socialLargeBillboardLTESix.height()*1.08)+'px'));
				}
				if ($(".social-follow-buttons-large").children("li").size() <= 3 ) {
					//$(".closed-container-billboard-inner-left-container").addClass("hidden");
					$(".closed-container-billboard-inner-right-container").removeClass("closed-container-billboard-inner-text-over-image");
					$(this).find(".billboard-inner-container").removeAttr("style").addClass("sidebar-triple-slot-one-lt-three-billboard-control");
					$(this).find(".mailchimp-newsletter-container").removeAttr("style");
				}
			}
		});
		*/
	});
	// Index per category show button
	$(".index-category-show-button").click(function() {
		$(this).parent().parent().parent().parent().parent().find(".per-category-open-container").find(".per-category-content-container").removeClass("hidden");
		$(this).parent().parent().parent().parent().parent().find(".per-category-open-container").find(".per-category-sidebar-container").removeClass("per-category-closed-container-content-sidebar");
		
		$(this).parent().parent().parent().parent().parent().find(".closed-container-billboard-inner-left-container").removeClass("hidden").removeClass("billboard-inner-container-gte-six").removeClass("billboard-inner-container-slot-six-gte-eight").removeClass("billboard-inner-container-slot-three-gt-six").removeClass("billboard-inner-container-slot-five-gt-eight");
		$(this).parent().parent().parent().parent().parent().find(".closed-container-billboard-inner-right-container").removeClass("closed-container-billboard-inner-text-over-image").removeClass("sidebar-position-one-gt-six-large-social-buttons-billboard-control").removeClass("billboard-inner-container-slot-six-gte-eight-text-over-image").removeClass("billboard-inner-container-slot-three-gt-six-text-over-image").removeClass("billboard-inner-container-slot-five-gt-eight-text-over-image");
		$(this).parent().parent().parent().parent().parent().find(".closed-container-billboard-container").removeClass("billboard-inner-container-slot-four-lt-three").removeClass("billboard-inner-container-slot-four-gt-three").removeClass("billboard-inner-container-slot-four-gt-six").removeClass("billboard-inner-container-slot-four-gt-nine").removeClass("billboard-inner-container-slot-six-gt-four").removeClass("billboard-inner-container-slot-six-lte-four");
		$(this).parent().parent().parent().parent().parent().find(".mailchimp-newsletter-container").removeAttr("style");
		$(this).parent().parent().parent().parent().addClass("hidden");
		
		// Index per Category make sidebar the same height as the articles on the left
		var editorsChoiceSidebarContainerTop = $(".per-category-sidebar-container").find(".editors-choice-container-top").outerHeight();
		var editorsChoiceSidebarContainerBottom = $(".per-category-sidebar-container").find(".editors-choice-container-bottom").innerHeight();
		var editorsChoiceSidebarContainerMiddle = $(".per-category-content-container").height();
		var editorsChoiceSidebarContainerMiddleSum = editorsChoiceSidebarContainerMiddle - (editorsChoiceSidebarContainerTop + editorsChoiceSidebarContainerBottom);
		$(".per-category-sidebar-container").find(".editors-choice-container-middle").css('height', (editorsChoiceSidebarContainerMiddleSum));
		$(".per-category-closed-container-content-sidebar").find(".editors-choice-container-middle").removeAttr("style");
		var newsStreamSidebarContainerTop = $(".per-category-sidebar-container").find(".news-stream-container-top").outerHeight();
		var newsStreamSidebarContainerBottom = $(".per-category-sidebar-container").find(".news-stream-container-bottom").innerHeight();
		var newsStreamSidebarContainerMiddle = $(".per-category-content-container").height();
		var newsStreamSidebarContainerMiddleSum = newsStreamSidebarContainerMiddle - (newsStreamSidebarContainerTop + newsStreamSidebarContainerBottom);
		$(".per-category-sidebar-container").find(".news-stream-container-middle").css('height', (newsStreamSidebarContainerMiddleSum));
		$(".per-category-closed-container-content-sidebar").find(".news-stream-container-middle").removeAttr("style");
		$(this).parent().parent().parent().parent().parent().find(".billboard-inner-container").removeAttr("style").removeClass("sidebar-triple-slot-one-lt-three-billboard-control").removeClass("sidebar-position-one-lt-six-large-social-buttons-billboard-control").removeClass("sidebar-triple-slot-one-lt-three-large-social-buttons-billboard-control").removeClass("billboard-inner-container-lte-twelve");
		$(this).parent().parent().parent().parent().parent().find(".per-category-sidebar-container-more-than-eight").removeAttr("style");
		$(this).parent().parent().parent().parent().parent().find(".mailchimp-newsletter-container").removeClass("per-category-sidebar-container-more-than-eight");
		$(this).parent().parent().parent().parent().parent().find(".social-follow-buttons-small").parent().parent().removeClass("global-closed-small-mailchimp-newsletter");
		$(this).parent().parent().parent().parent().parent().find(".social-follow-buttons-small").parent().removeClass("closed-small-mailchimp-newsletter");
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
	var newsStreamSliderContainerTop = $(".news-stream").find(".news-stream-container-top").outerHeight();
	var newsStreamSliderContainerBottom = $(".news-stream").find(".news-stream-container-bottom").innerHeight();
	var newsStreamSliderContainerMiddle = $(".swiper-container").height();
	var editorsChoiceSliderContainerTop = $(".news-stream").find(".editors-choice-container-top").outerHeight();
	var editorsChoiceSliderContainerBottom = $(".news-stream").find(".editors-choice-container-bottom").innerHeight();
	var editorsChoiceSliderContainerMiddle = $(".swiper-container").height();
	var newsStreamSliderContainerMiddleSum = newsStreamSliderContainerMiddle - (newsStreamSliderContainerTop + newsStreamSliderContainerBottom);
	var editorsChoiceSliderContainerMiddleSum = editorsChoiceSliderContainerMiddle - (editorsChoiceSliderContainerTop + editorsChoiceSliderContainerBottom);
	$(".news-stream").find(".news-stream-container-middle").css('height', (newsStreamSliderContainerMiddleSum));
	$(".news-stream").find(".editors-choice-container-middle").css('height', (editorsChoiceSliderContainerMiddleSum));
	// Contain the index category seperator advertisement
	var indexCategoryAdSeperatorWidth = $(".per-category-seperator-ad-container iframe").innerWidth();
	var indexCategoryAdSeperatorSum = indexCategoryAdSeperatorWidth / 8.088888888888889;
	$(".per-category-seperator-ad-container p").css('height', (indexCategoryAdSeperatorSum));
	// Index per Category make sidebar the same height as the articles on the left
	var editorsChoiceSidebarContainerTop = $(".per-category-sidebar-container").find(".editors-choice-container-top").outerHeight();
	var editorsChoiceSidebarContainerBottom = $(".per-category-sidebar-container").find(".editors-choice-container-bottom").innerHeight();
	var editorsChoiceSidebarContainerMiddle = $(".per-category-content-container").height();
	var editorsChoiceSidebarContainerMiddleSum = editorsChoiceSidebarContainerMiddle - (editorsChoiceSidebarContainerTop + editorsChoiceSidebarContainerBottom);
	$(".per-category-sidebar-container").find(".editors-choice-container-middle").css('height', (editorsChoiceSidebarContainerMiddleSum));
	$(".per-category-closed-container-content-sidebar").find(".editors-choice-container-middle").removeAttr("style");
	var newsStreamSidebarContainerTop = $(".per-category-sidebar-container").find(".news-stream-container-top").outerHeight();
	var newsStreamSidebarContainerBottom = $(".per-category-sidebar-container").find(".news-stream-container-bottom").innerHeight();
	var newsStreamSidebarContainerMiddle = $(".per-category-content-container").height();
	var newsStreamSidebarContainerMiddleSum = newsStreamSidebarContainerMiddle - (newsStreamSidebarContainerTop + newsStreamSidebarContainerBottom);
	$(".per-category-sidebar-container").find(".news-stream-container-middle").css('height', (newsStreamSidebarContainerMiddleSum));
	$(".per-category-closed-container-content-sidebar").find(".news-stream-container-middle").removeAttr("style");
}
$(window).load(PCViewUpdate);
$(window).resize(PCViewUpdate);
