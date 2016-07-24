"use strict";

app.controller("logoutCTRL", function($scope, $location, firebaseAuthFactory) {

	$scope.logout = function() {
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  firebaseAuthFactory.currentUserID = null;
		  console.log(firebaseAuthFactory.getUser(), "Logged out");
		}, function(error) {
		  // An error happened.
		  console.log(error);
		});
	};
});