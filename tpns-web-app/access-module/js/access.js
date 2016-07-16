// JavaScript Document

function OpenWindow() {
	for(i=0;i<document.accessHelpGeneralForm["access-help-general-form"].length;i++) {
		if(document.accessHelpGeneralForm["access-help-general-form"][i].checked) {
			window.open(document.accessHelpGeneralForm["access-help-general-form"][i].value, "_self");
			break;
		}
	}
}

function forwardUsername(){
	var uname = document.getElementById("username").value;
	window.location.replace("access.html?username="+uname);
	return false;
}

function readName(){
	var uname = getHttpRequestParameter("username");
	document.getElementById("username").value = uname;
}

function doLogin(){
	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var loginUrl=user_service_url.concat('/oauth/token?client_id=user-webapp&client_secret=secret&username=').concat(username).concat('&password=').concat(password).concat('&grant_type=password');

	var request = $.ajax({
		type: 'POST',
		url: user_service_url,
                contentType: 'application/x-www-form-urlencoded',
		dataType: 'json',
		cache: false
	});

	request.done(function( data) {
		console.log('Login success!');
		console.log('data = '+ data);
		console.log('token = '+ data.access_token);
		location.href = "../dashboard-module/business-intelligence-dashboard.html"
	});
	 
	request.fail(function( jqXHR, textStatus ) {
	        console.log(jqXHR.status);
	        console.log(jqXHR.header);
		console.log('Login failed!');
	});

	return false;
}
