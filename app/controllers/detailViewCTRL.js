"use strict";

app.controller("detailViewCTRL", function($scope, $route, $location, $routeParams, dataFactory) {

	$scope.movies = [];
 //function to remove from collection and delete from FB
 dataFactory.getMovieList()
 .then ((moviesArray) => {
 	$scope.movies = moviesArray;

 	$scope.selectedMovie = $scope.movies.filter((movie) => {
			return movie.id === $routeParams.movieId;
		})[0];
 });

 $scope.deleteMovieCall = function(movieID) {
 	if($scope.movies){
	 	dataFactory.deleteMovie(movieID)
		.then((movies) => {
			$location.path("/movies/collection");
			// ItemStorage.getItemList()
			// .then((itemCollection) => {
			// 	$scope.items = itemCollection;
			// });
		});
		$route.reload();
	} else {
		alert("You have no movies in your collection!");
	}
 };
});
