// JavaScript Document
$(document).ready( function() {
	'use strict';
	// Reset Articles Filter on click of the close button
	$(".filter-active").find("a").click(function(e) {
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
	// Checkbox selected
	$(".admin-global-checkbox input:checkbox").removeAttr('checked').removeAttr('checked');
    function check() {
        var $checkbox = $(this);
        var num = $checkbox.parent().hasClass("admin-global-checkbox-checked");
        if ($checkbox.is(":checked")) {
            $(this).attr('checked','checked').parent().parent().parent().parent().addClass("admin-global-checkbox-checked");
        } else {
        	$(this).removeAttr('checked').parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
        }
    }
    $("input[type=checkbox]").each(check).change(check);
	
	
	
	
	
	
});
















