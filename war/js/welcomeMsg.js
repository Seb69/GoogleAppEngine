addwelcome = function (){
	$.get("/checkwelcome", function(welcomeMsg){
		console.log(welcomeMsg);
		$("#welcomeMsg").html(welcomeMsg);
	});
};

addwelcome();

redirect = function (){
	window.location.replace("ha-search-screen.html");
};

setTimeout(redirect, 4000);