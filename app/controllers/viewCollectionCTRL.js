"use strict";

app.controller("collectionCTRL", function($scope, $location, dataFactory, firebaseAuthFactory) {
	$scope.movies = [];
 //function to remove from collection and delete from FB
 dataFactory.getMovieList()
 .then ((moviesArray) => {
 	$scope.movies = moviesArray;
 })
 //function to allow rerating of movies
 //
})