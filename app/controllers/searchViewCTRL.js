"use strict";

app.controller("searchCTRL", function($scope, $location, OMDBFactory, dataFactory, firebaseAuthFactory) {

$scope.searchedMovie = OMDBFactory.newMovie;

// call the getMoviesByTitle function when a change occurs in search box.
$scope.searchTitle = function(title){
	// console.log("title", title);
	OMDBFactory.getMovieByTitle(title)
	.then((movieData) => {
		OMDBFactory.newMovie.title = movieData.Title;
		OMDBFactory.newMovie.poster = movieData.Poster;
		OMDBFactory.newMovie.year = movieData.Year;
		OMDBFactory.newMovie.actors = movieData.Actors.split(/, /);
		OMDBFactory.newMovie.description = movieData.Plot;
		// console.log("movie", movieData);
		// console.log("newMovie", OMDBFactory.newMovie);
	});
};

$scope.addToCollection = function(newMovieObject){
	newMovieObject.uid = firebaseAuthFactory.getUser();
	newMovieObject.seen = true;

	dataFactory.postNewMovie(newMovieObject)
	.then ((response) => {
			$location.url("/movies/collection");
	});
	//add movie to collection
	//ask for a star rating
};

});