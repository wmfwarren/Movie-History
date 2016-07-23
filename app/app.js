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
		templateUrl: "partials/viewCollectionView.html",
		controller: "collectionCTRL"
		}).
		when("/movies/search", {
		templateUrl: "partials/searchAPIView.html",
		controller: "searchCTRL"
		}).
		when("/movies/details/:movieId", {
		templateUrl: "partials/detailView.html",
		controller: "detailViewCTRL"
	}).
		when("/login", {
		templateUrl: "partials/loginView.html",
		controller: "loginCTRL"
		}).
		when("/logout", {
		templateUrl: "partials/logoutView.html",
		controller: "logoutCTRL"
		}).
		otherwise("/login");

});
