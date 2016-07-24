"use strict";

app.factory("OMDBFactory", function($q, $http, MoviesURL) {
	var newMovie = {
		title: "Persona",
		poster: "http://ia.media-imdb.com/images/M/MV5BMTc1OTgxNjYyNF5BMl5BanBnXkFtZTcwNjM2MjM2NQ@@._V1_SX300.jpg",
		year: "1966",
		actors: ["Bibi Anderson", "Liv Ullmann"],
		description: "A nurse is put in charge of an actress who can't talk and finds that the actress's persona is melding with hers.",
		stars: null,
		seen: false,
		uid: null
	};
	//get the movie data based on input in the search field.
	const getMovieByTitle = function(title){
		console.log("title", title);
		return new $q((resolve, reject) => {
			$http.get(`${MoviesURL}/?t=${title}&y=&plot=full&r=json`)
			.success((movieData) => {
				resolve(movieData);
			})
			.error((error) => {
				console.log("error getting by title", error);
				reject(error);
			});
		});
	};

	return {newMovie, getMovieByTitle};
});