"use strict";

app.controller("loginCTRL", function($scope, $location, firebaseAuthFactory) {

	$scope.login = function(){
		console.log("authWithProvider invoked");

		firebaseAuthFactory.authWithProvider()
    .then(function(result) {
      var user = result.user.uid;
      console.log("logged in user", user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error);
    });
	};
})