"use strict";

app.controller("detailViewCTRL", function($scope, $location, $routeParams, dataFactory) {
	// $scope.rating = [
	// 	{rating: 1, rate: $scope.setRating(1, movie)},
	// 	{rating: 2, rate: $scope.setRating(2, movie)},
	// 	{rating: 3, rate: $scope.setRating(3, movie)},
	// 	{rating: 4, rate: $scope.setRating(4, movie)},
	// 	{rating: 5, rate: $scope.setRating(5, movie)}
	// ];

	// $scope.setRating(rated, movie){
	// 	movie.stars = rated;
	// 	dataFactory.putEdits(movie);
	// }

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
		alert("You have no movies in your collection!")
	}
 };
})
