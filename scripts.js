var main = function() {
	window.fbAsyncInit = function() {
	  	FB.init({
		    appId	: '1622609088024305',
		    cookie	: true,
		    xfbml 	: true,
		    version	: 'v2.4',
	  	});
	  	loginStatus();
	};

	(function(d, s, id){
	   var js, fjs = d.getElementsByTagName(s)[0];
	   if (d.getElementById(id)) {return;}
	   js = d.createElement(s); js.id = id;
	   js.src = "//connect.facebook.net/en_US/sdk.js";
	   fjs.parentNode.insertBefore(js, fjs);
	 }(document, 'script', 'facebook-jssdk'));
	
}

var statusCallback = function(response) {
	if (response.status === "connected") {
		//Connected to App and Facebook
		$("#connection_status").html("You are logged in to LogNShare");
	} else if (response.staus === "not_authorized"){
		//Connected to Facebook but not app
		$("#connection_status").html("Please connect to LogNShare");
	} else {
		//Not connected to Facebook
		$("#connection_status").html("Please log in to Facebook");
	}
}

var loginStatus = function(){
	FB.getLoginStatus(function(response) {
		statusCallback(response);
	});
}

var setURL = function(){
	/* Non-functional. Apparently Facebook's API doesn't let you change 
	a Facebook button's attributes using JQuery
	*/
	var tmp = $("#targetURL").val();
	$("#FB_share_btn").attr("data-href", tmp);
	console.log($("#FB_share_btn").attr("data-href"));
}

var replaceShare = function(){
	/* Non-functional. Apparently Facebook's API doesn't let you delete
	or create a Facebook button div with JQuery
	*/
	//$("#shareLocation").append("<div class= \'fb-share-button\' data-layout=\'button\' id=\'share_btn_A\'></div>");
	//$("#shareLocation").append("<div>test</div>");
	$("#shareLocation").remove();
	$("FB_share_btn").remove();
}

var shareCurrentURL = function(){
	var a = document.URL;
	console.log(a);
	/*
	FB.ui({
	  method: 'share',
	  href: 'https://developers.facebook.com/docs/',
	}, function(response){});
*/
}

$(document).ready(main);