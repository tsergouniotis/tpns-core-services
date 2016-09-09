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

$(document).ready( function() {
	'use strict';
	// Initialize CountChars in form
	$(".new-article-textbox").countChar();
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
        if ($checkbox.is(":checked")) {
            $(this).attr('checked','checked').parent().parent().parent().parent().addClass("admin-global-checkbox-checked");
        } else {
        	$(this).removeAttr('checked').parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
        }
    }
    $("input[type=checkbox]").each(check).change(check);
	// Select all checkboxes
	$(".select-all-rows-button-check, .select-all-rows-button-uncheck").on("click", function () {
        var check = $(".admin-global-checkbox input:checkbox").is(":checked") ? false:true;
        $(".admin-global-checkbox input:checkbox").prop('checked', check).attr('checked','checked').parent().parent().parent().parent().addClass("admin-global-checkbox-checked");
		
		if ($(".admin-global-checkbox input:checkbox").is(':checked')) {
			$(".select-all-rows-button-check").addClass("hidden");
			$(".select-all-rows-button-uncheck").removeClass("hidden");
		}
    });
	$(".select-all-rows-button-uncheck").on("click", function () {
        var check = $(".admin-global-checkbox input:checkbox").is(":checked") ? false:true;
        $(".admin-global-checkbox input:checkbox").prop('checked', check).removeAttr('checked').parent().parent().parent().parent().removeClass("admin-global-checkbox-checked");
		if ($(".admin-global-checkbox input:checkbox").is(':checked') !== true) {
			$(".select-all-rows-button-check").removeClass("hidden");
			$(".select-all-rows-button-uncheck").addClass("hidden");
		}
    });
	
	// Initialize jquery-uploader
	// Dev Docs can be found here... http://hayageek.com/docs/jquery-upload-file.php
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
			dragDropStr: "<span>Drag &amp; Drop Files Here...</span>",
			showDelete: true,
			deleteCallback: function (data, pd) {
			for (var i = 0; i < data.length; i++) {
				$.post("#", {op: "delete",name: data[i]},
				function (resp,textStatus, jqXHR) {
					//Show Message	
					alert("File Deleted");
				});
			}
			pd.statusbar.hide(); //Your choice.
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
			multiDragErrorStr: "You can only add one image to the Kicker",
			dragDropStr: "<span>Drag &amp; Drop Files Here...</span>",
			showDelete: true,
			deleteCallback: function (data, pd) {
			for (var i = 0; i < data.length; i++) {
				$.post("#", {op: "delete",name: data[i]},
				function (resp,textStatus, jqXHR) {
					//Show Message	
					alert("File Deleted");
				});
			}
			pd.statusbar.hide(); //Your choice.
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
			multiDragErrorStr: "You can only add one image to the Kicker",
			dragDropStr: "<span>Drag &amp; Drop Files Here...</span>",
			showDelete: true,
			deleteCallback: function (data, pd) {
			for (var i = 0; i < data.length; i++) {
				$.post("#", {op: "delete",name: data[i]},
				function (resp,textStatus, jqXHR) {
					//Show Message	
					alert("File Deleted");
				});
			}
			pd.statusbar.hide(); //Your choice.
		},
	});
	
	
	
	
	
});
















