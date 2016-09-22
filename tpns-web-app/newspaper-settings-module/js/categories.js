$(document).ready( function() {
	'use strict';
    $(".reorder-up, .sub-reorder-up").click(function(){
      var $current = $(this).closest('li').fadeOut().slideUp("slow");
      var $previous = $current.prev('li');
      if($previous.length !== 0){
        $current.insertBefore($previous).fadeIn().slideDown("slow");
      }
      return false;
    });

    $(".reorder-down, .sub-reorder-down").click(function(){
      var $current = $(this).closest('li').fadeOut().slideUp("slow");
      var $next = $current.next('li');
      if($next.length !== 0){
        $current.insertAfter($next).fadeIn().slideDown("slow");
      }
      return false;
    });
});



