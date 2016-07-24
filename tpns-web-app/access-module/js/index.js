// JavaScript Document

function OpenWindow() {

	for(i=0;i<document.accessHelpGeneralForm["access-help-general-form"].length;i++) {
		if(document.accessHelpGeneralForm["access-help-general-form"][i].checked) {
			window.open(document.accessHelpGeneralForm["access-help-general-form"][i].value, "_self");
			break;
		}
	}

}

function validateUsername(){

	var uname = document.getElementById("username").value;
	
	var findNameUrl=user_service_login_url.concat('/find/').concat(uname);

	var request = $.ajax({
		type: 'GET',
		url: findNameUrl,
		accept: 'application/json',
        	contentType: 'application/json',
		dataType: 'json',
		cache: false
	});
	
	request.done(function( data) {
		window.location.replace("access.html?username="+uname);
	});

	return false;

}

$(document).ajaxError( function(e, x, settings, exception) {
	var message;
	var statusErrorMap = {
		'400' : "Server understood the request, but request content was invalid.",
		'401' : "Unauthorized access.",
		'403' : "Forbidden resource can't be accessed.",
		'500' : "Internal server error.",
		'503' : "Service unavailable."
 	};
	if (x.status===404){
		message="The email you provided above does not exist, please enter another one in order to continue.";
	} else if (x.status) {
		message =statusErrorMap[x.status];
	     	if(!message){
			message="Unknown Error.";
		}
	} else if(exception=='parsererror'){
		message="Error.\nParsing JSON Request failed.";
	} else if(exception=='timeout'){
		message="Request Time out.";
	} else if(exception=='abort'){
		message="Request was aborted by the server";
	} else {
		message="Unknown Error \n.";
	}
	$("#username").parent().addClass('validation-error');
	$("#username").parent().find("h6").show().html(message);
});
