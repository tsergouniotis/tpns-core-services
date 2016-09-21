$(document).ready( function() {
	'use strict';
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