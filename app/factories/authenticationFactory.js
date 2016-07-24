"use strict";

app.factory("firebaseAuthFactory", function() {

	var currentUserID = null;
	var provider = new firebase.auth.GoogleAuthProvider();

	// This watches for log out or log in by a user, then assigned the hash
	// to the currentUserID variable
	firebase.auth().onAuthStateChanged((user) => {
		if(user) {
			currentUserID = user.uid;
			console.log(currentUserID, "logged in");
		} else {
			currentUserID = null;
			console.log("no one logged in" );
		}
	});

	// This allows auth with the provider variable (Google sign in) ans
	// then logs the user in with a sign in window
	const authWithProvider = function(){
		return firebase.auth().signInWithPopup(provider);
	};

	const isAuthenticated = function() {
		return (currentUserID) ? true : false;
	};

	const getUser = function(){
		return currentUserID;
	};


	return {currentUserID, getUser, isAuthenticated, authWithProvider};
});