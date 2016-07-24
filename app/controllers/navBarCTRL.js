"use strict";
app.controller("navBarCTRL", function($scope, $location) {

	$scope.navLink = [
			{
				name: "Logout", 
				url: "#/logout"
			}, 
			{
				name: "Login", 
				url: "#/login"
			}, 
			{
				name: "Collection",
				url: "#/movies/collection"
			}, 
			{
				name: "Search Movies",
				url: "#/movies/search"
			}
	];
});