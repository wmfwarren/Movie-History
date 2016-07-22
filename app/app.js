"use strict";

var app = angular.module("movieMadness", ["ngRoute"])
.constant("FirebaseURL", "https://marshalls-movie-madness.firebaseio.com/")
.constant("MoviesURL", "http://www.omdbapi.com/");

app.config(($routeProvider, FBCreds) => {

	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	}
//routers go here

});
