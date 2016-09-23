$(document).ready( function() {
	'use strict';
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
	
});

// Check the width of the window and do...
function PCViewUpdate() {
	'use strict';
	// Categories Tables - make the columns of all 3 tables have the same width
	var CategoriesColumnOne = $(".categories-data-header-items:nth-child(1)");
	$(".categories-data-items:nth-child(4n+1)").css('width', (CategoriesColumnOne.width()));
	$(".sub-categories-data-items:nth-child(4n+1)").css('width', (CategoriesColumnOne.width()));
	var CategoriesColumnTwo = $(".categories-data-header-items:nth-child(2)");
	$(".categories-data-items:nth-child(4n+2)").css('width', (CategoriesColumnTwo.width()));
	$(".sub-categories-data-items:nth-child(4n+2)").css('width', (CategoriesColumnTwo.width()));
	var CategoriesColumnThree = $(".categories-data-header-items:nth-child(3)");
	$(".categories-data-items:nth-child(4n+3)").css('width', (CategoriesColumnThree.width()));
	$(".sub-categories-data-items:nth-child(4n+3)").css('width', (CategoriesColumnThree.width()));
	var CategoriesColumnFour = $(".categories-data-header-items:nth-child(4)");
	$(".categories-data-items:nth-child(4n+4)").css('width', (CategoriesColumnFour.width()));
	$(".sub-categories-data-items:nth-child(4n+4)").css('width', (CategoriesColumnFour.width()));
	
	
	
	
	
	
}
$(window).load(PCViewUpdate);
$(window).resize(PCViewUpdate);
