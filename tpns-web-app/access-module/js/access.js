// JavaScript Document

function OpenWindow() {
	for(i=0;i<document.accessHelpGeneralForm["access-help-general-form"].length;i++) {
		if(document.accessHelpGeneralForm["access-help-general-form"][i].checked) {
			window.open(document.accessHelpGeneralForm["access-help-general-form"][i].value, "_self");
			break;
		}
	}
}

$(document).on('submit','.access-form',function (e) {
	return doLogin();
})

function doLogin(){
	console.log('Attempting to login...');
	var success = false;
	var request = $.ajax({
	    type: 'POST',
	    url: user_service_url+'/oauth/token',
	    contentType: 'application/json; charset=utf-8',
	    data: { client_id: 'user-webapp', 
			client_secret: 'secret', 
			username: 'admin', 
			password: 'admin', 
			grant_type: 'password'},
	    dataType: 'json',
	    cache: false
	});

	request.done(function( msg) {
		console.log('Login success!');
		success = true;
	});
	 
	request.fail(function( jqXHR, textStatus ) {
		console.log('Login failed!');
	});

	return success;
}
