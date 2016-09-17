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

// Global Checkboxes
/* Checkbox selected */
$("input.single-article-checkbox:checkbox").removeAttr('checked').removeAttr('checked');
function check() {
	var $checkbox = $(this);
	if ($checkbox.is(":checked")) {
		$(this).attr('checked','checked').parent().parent().parent().parent().addClass("admin-global-checkbox-checked");
	} else {
		$(this).removeAttr('checked').parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
	}
	if ($("input.single-article-checkbox:checkbox").is(":checked")) {
		$(".admin-articles-bulk-actions-controller").removeClass("hidden");
	} else {
		$(".admin-articles-bulk-actions-controller").addClass("hidden");
		$(".select-all-rows-button-check").removeClass("hidden");
		$(".select-all-rows-button-uncheck").addClass("hidden");
	}
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
	$("input.single-article-checkbox:checkbox").prop('checked', uncheck).removeAttr('checked');
	if ($("input.single-article-checkbox:checkbox").is(':checked') !== true) {
		$(".admin-articles-bulk-actions-controller").addClass("hidden");
		$("input.single-article-checkbox:checkbox").parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
		$(".select-all-rows-button-check").removeClass("hidden");
		$(".select-all-rows-button-uncheck").addClass("hidden");
	}
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
	
	// Initialize jquery-uploader
	/* Dev Docs can be found here... http://hayageek.com/docs/jquery-upload-file.php */
	$("#kickerUploader").uploadFile(
		{
			url:"#",
			fileName:"#",
			uploadStr:"Add Image",
			dragDrop:true,
			maxFileCount:1,
			multiple:false,
			sequential:true,
			acceptFiles:"image/*",
			showPreview:true,
			previewHeight: "100px",
			previewWidth: "auto",
			multiDragErrorStr: "You can only add one image to the Kicker",
			dragDropStr: "<br /><span>Drag &amp; Drop Image Here...</span>",
			showDelete: true,
			deleteCallback: function (data, pd) {
			for (var i = 0; i < data.length; i++) {
				$.post("#", {op: "delete",name: data[i]},
				function (resp,textStatus, jqXHR) {
					//Show Message	
					alert("File Deleted");
				});
			}
			pd.statusbar.hide(); //Your choice
		},
	});
	$("#billboardUploader").uploadFile(
		{
			url:"#",
			fileName:"#",
			uploadStr:"Add Image",
			dragDrop:true,
			maxFileCount:1,
			multiple:false,
			sequential:true,
			acceptFiles:"image/*",
			showPreview:true,
			previewHeight: "100px",
			previewWidth: "auto",
			multiDragErrorStr: "You can only add one image to the Billboard",
			dragDropStr: "<br /><span>Drag &amp; Drop Image Here...</span>",
			showDelete: true,
			deleteCallback: function (data, pd) {
			for (var i = 0; i < data.length; i++) {
				$.post("#", {op: "delete",name: data[i]},
				function (resp,textStatus, jqXHR) {
					alert("File Deleted");
				});
			}
			pd.statusbar.hide();
		},
	});
	$("#nutshellUploader").uploadFile(
		{
			url:"#",
			fileName:"#",
			uploadStr:"Add Image",
			dragDrop:true,
			maxFileCount:1,
			multiple:false,
			sequential:true,
			acceptFiles:"image/*",
			showPreview:true,
			previewHeight: "100px",
			previewWidth: "auto",
			multiDragErrorStr: "You can only add one image to the Nutshell",
			dragDropStr: "<br /><span>Drag &amp; Drop Image Here...</span>",
			showDelete: true,
			deleteCallback: function (data, pd) {
			for (var i = 0; i < data.length; i++) {
				$.post("#", {op: "delete",name: data[i]},
				function (resp,textStatus, jqXHR) {
					alert("File Deleted");
				});
			}
			pd.statusbar.hide();
		},
	});
	
	
	
	
	
});


function readArticles(){
	var username = getCookie("username");
	var authtoken = getCookie("authtoken");
	console.log("username = "+username);
	console.log("authtoken = "+authtoken);
}













