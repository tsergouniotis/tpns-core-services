$(document).ready( function() {
	'use strict';
	// Date Picker Settings
	$(".admin-global-bi-datepicker, .datepicker-here").datepicker({
		maxDate: new Date(),
		range: true,
		position: "bottom center"
	});
	// Reset Date Picker Input Field Value
	$('.input-reset-button').each(function(){
		$('.input-reset-button').click(function(){
			$(this).parent().find('input[type="text"]').val('');
		});
	});
});