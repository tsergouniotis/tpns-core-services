// JavaScript Document

$(document).ready( function() {
	'use strict';
	// Initialize jquery-uploader
	/* Dev Docs can be found here... http://hayageek.com/docs/jquery-upload-file.php */
	$("#mediaUploader").uploadFile(
		{
			url:"#",
			fileName:"#",
			uploadStr:"Add Image",
			dragDrop:true,
			//maxFileCount:1,
			multiple:true,
			sequential:true,
			//acceptFiles:"image/*",
			showPreview:true,
            previewHeight: "100%",
            previewWidth: "100%",
            dragdropWidth: "100%",
			//multiDragErrorStr: "You can only add one image to the Kicker",
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
	
	
});