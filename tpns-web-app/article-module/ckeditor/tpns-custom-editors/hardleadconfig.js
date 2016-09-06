// JavaScript Document
// This is the config file for the Hard Lead WYSIWYG Editor
CKEDITOR.editorConfig = function( config ) {
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,autogrow,lineutils,widget,notification,notificationaggregator,embedbase,embedsemantic,wordcount';
	config.skin = 'minimalist';
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Subscript,Superscript,RemoveFormat,Strike,NumberedList,Outdent,Indent,Blockquote,Cut,Copy,Anchor,Maximize,Source,Image,EmbedSemantic,Table,HorizontalRule,Styles,About,Format';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	
	// Word Count Settings
	config.wordcount = {
		// Whether or not you want to show the Paragraphs Count
		showParagraphs: false,
		// Whether or not you want to show the Word Count
		showWordCount: false,
		// Whether or not you want to show the Char Count
		showCharCount: true,
		// Whether or not you want to count Spaces as Chars
		countSpacesAsChars: true,
		// Whether or not to include Html chars in the Char Count
		countHTML: false,
		// Maximum allowed Word Count, -1 is default for unlimited
		maxWordCount: -1,
		// Maximum allowed Char Count, -1 is default for unlimited
		maxCharCount: 150,
		// How long to show the 'paste' warning, 0 is default for not auto-closing the notification
		pasteWarningDuration: 0,
		// Add filter to add or remove element before counting (see CKEDITOR.htmlParser.filter), Default value : null (no filter)
		filter: new CKEDITOR.htmlParser.filter({
			elements: {
				div: function( element ) {
					if(element.attributes.class == 'mediaembed') {
						return false;
					}
				}
			}
		})
	};
	
};
