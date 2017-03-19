$(document).ready( function() {
	'use strict';
		
	readCookie();

	var article = new Article();
	
	var loggedUserProfileView = new LoggedUserProfileView({model: profile});

	var allNavigationLinksDropDownView = new AllNavigationLinksDropDownView({collection: availableNavigationLinks});
	var selectedNavigationLinkView = new SelectedNavigationLinkView({model: selected_site});	
	
	var newArticleInputView = new NewArticleInputView({model: article});

	$('.newArticleLoggedUserContainer').append(loggedUserProfileView.render().el);	

	$('.newArticlesPropertiesSelectionContainer').append(selectedNavigationLinkView.render().el.childNodes);
	$('.newArticlesPropertiesDropDownContainer').append(allNavigationLinksDropDownView.render().el.childNodes);
	
	$('.newArticleInputContainer').append(newArticleInputView.render().el.childNodes);	

	$('.new-article-textbox').on({
		'focus' : function() {
			$(this).addClass('tinymce');
			addEditors();
		},
		'blur' : function() {
			$(this).removeClass('tinymce');
		}
	});

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
