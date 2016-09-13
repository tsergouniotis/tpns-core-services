// JavaScript Document

function OpenWindow() {

	for(i=0;i<document.accessHelpGeneralForm["access-help-general-form"].length;i++) {
		if(document.accessHelpGeneralForm["access-help-general-form"][i].checked) {
			window.open(document.accessHelpGeneralForm["access-help-general-form"][i].value, "_self");
			break;
		}
	}

}

function readName(){
	console.log("hello");
	var uname = getHttpRequestParameter("username");
	if (uname){
		document.getElementById("username").value = uname;
	} else {
		window.location.replace("index.html");
	}
}

function doLogin(){
	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var loginUrl=user_service_base_url.concat('/oauth/token?client_id=user-webapp&client_secret=secret&username=').concat(username).concat('&password=').concat(password).concat('&grant_type=password');

	var request = $.ajax({
		type: 'POST',
		url: loginUrl,
		accept: 'application/json',
        	contentType: 'application/json',
		dataType: 'json',
		cache: false
	});

	request.done(function( data) {
		location.href = "../dashboard-module/business-intelligence-dashboard.html"
	});
	 
	return false;

}

$(document).ajaxError( function(e, x, settings, exception) {
	var message;
	var statusErrorMap = {
		'401' : "Unauthorized access.",
		'403' : "Forbidden resource can't be accessed.",
		'500' : "Internal server error.",
		'503' : "Service unavailable."
 	};
	if (x.status===400){
	        var jsonResponseText = $.parseJSON(x.responseText);
		if (jsonResponseText.error_description==='USER_LOCKED'){
			message="This user has been locked. Please contact your administrator";
		} else {
			message="Invalid Password. Please try again";
		}
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
	$("#password").parent().addClass('validation-error');
	$("#password").parent().find("h6").show().html(message);
});

