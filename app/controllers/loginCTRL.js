"use strict";

app.controller("loginCTRL", function($scope, $location, firebaseAuthFactory) {

	$scope.login = function(){
		console.log("authWithProvider invoked");

		firebaseAuthFactory.authWithProvider()
    .then(function(result) {
      var user = result.user.uid;
      console.log("logged in user", user);
    }).catch(function(error) {
      console.log(error);
    });
	};
});