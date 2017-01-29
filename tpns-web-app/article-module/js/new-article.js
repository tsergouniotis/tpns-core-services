$(document).ready( function() {
	'use strict';
		
	readCookie();

	var article = new Article();

	var allNavigationLinksDropDownView = new AllNavigationLinksDropDownView({collection: availableNavigationLinks});
	var selectedNavigationLinkView = new SelectedNavigationLinkView({model: selected_site});	
	var profileSummaryView = new ProfileSummaryView({model: profile});
	var profileNotificationsView = new ProfileNotificationsView({model: profile});
	var profileMessagesView = new ProfileMessagesView({model: profile});
	var profileSelectedArticlesView = new ProfileSelectedArticlesView({model: profile});

	var headlineView = new HeadlineView({model: article});
	var subheadView = new SubheadView({model: article});	
	var softleadView = new SubheadView({model: article});
	var hardleadView = new SubheadView({model: article});
	var contentView = new ContentView({model: article});
	var kickerView = new KickerView({model: article});	
	var nutshellView = new NutshellView({model: article});	
	var billboardView = new BillboardView({model: article});
	var guestArticleView = new GuestArticleView({model: article});	

	$('.newArticlesPropertiesSelectionContainer').append(selectedNavigationLinkView.render().el.childNodes);
	$('.newArticlesPropertiesDropDownContainer').append(allNavigationLinksDropDownView.render().el.childNodes);
	$('.newArticlesProfileSummaryContainer').append(profileSummaryView.render().el.childNodes);	
	$('.newArticlesSelectedProfileNotificationsContainer').append(profileMessagesView.render().el.childNodes);	
	$('.newArticlesSelectedProfileMessagesContainer').append(profileNotificationsView.render().el.childNodes);	
	$('.newArticlesSelectedProfileArticlesContainer').append(profileSelectedArticlesView.render().el.childNodes);

	$('.headlineContainer').append(headlineView.render().el.childNodes);
	$('.subheadContainer').append(subheadView.render().el.childNodes);
	$('.softleadContainer').append(softleadView.render().el.childNodes);
	$('.hardleadContainer').append(hardleadView.render().el.childNodes);
	$('.contentContainer').append(contentView.render().el.childNodes);
	$('.kickerContainer').append(kickerView.render().el.childNodes);
	$('.nutshellContainer').append(nutshellView.render().el.childNodes);
	$('.billboardContainer').append(billboardView.render().el.childNodes);
	$('.guestArticleContainer').append(guestArticleView.render().el.childNodes);

	$('.new-article-textbox').on({
	  'focus' : function() {
		$(this).addClass('tinymce');
		addEditors();
	   },
	   'blur' : function() {
		$(this).removeClass('tinymce');
	   }
	});

	// Initialize jquery-uploader
	/* Dev Docs can be found here... http://hayageek.com/docs/jquery-upload-file.php */
	/* $("#kickerUploader").uploadFile(
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
	$("#guestArticleUploader").uploadFile(
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
	});*/

});

function addEditors(){
	tinymce.init({
	  selector: 'textarea.tinymce',
	  menubar: false,
	  plugins: [
	    'advlist autolink lists link image charmap print preview anchor',
	    'searchreplace visualblocks code fullscreen',
	    'insertdatetime media table contextmenu paste code'
	  ],
	  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
	  content_css: '//www.tinymce.com/css/codepen.min.css'
	});
}
