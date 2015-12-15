
function onSignIn(googleUser) {
    	  var profile = googleUser.getBasicProfile();
    	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    	  console.log('Name: ' + profile.getName());
    	  console.log('Image URL: ' + profile.getImageUrl());
    	  console.log('Email: ' + profile.getEmail());
    	  //document.getElementById("ID").innerHTML =profile.getId();
//    	  document.getElementById("Name").innerHTML =profile.getName();
//    	  document.getElementById("Image").innerHTML =profile.getImageUrl();
//    	  document.getElementById("Email").innerHTML =profile.getEmail();
    	}


