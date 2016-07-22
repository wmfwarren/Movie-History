"use strict";

	var app = angular.module("movieMadness", ["ngRoute"])
	.constant("FirebaseURL", "https://marshalls-movie-madness.firebaseio.com/")
	.constant("MoviesURL", "http://www.omdbapi.com/");

	app.config(($routeProvider, FBCreds) => {

		let authConfig = {
			apiKey: FBCreds.apiKey,
			authDomain: FBCreds.authDomain
		}

		firebase.initializeApp(authConfig);
		
		$routeProvider.
		when("/movies/collection", {
		templateUrl: "viewCollectionView.html",
		controller: "collectionCTRL"
		}).
		when("/movies/search", {
		templateUrl: "searchAPIView.html",
		controller: "searchCTRL"
		}).
		when("/login", {
		templateUrl: "loginView.html",
		controller: "loginCTRL"
		}).
		when("/logout", {
		templateUrl: "logoutView.html",
		controller: "logoutCTRL"
		}).
		otherwise("/login");

});
