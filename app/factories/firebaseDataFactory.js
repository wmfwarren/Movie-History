"use strict";

app.factory("dataFactory", function(FirebaseURL,$q, $http, firebaseAuthFactory) {

	//get movies from firebase
	var getMovieList = function() {
		let movies = [];
		return $q((resolve, reject) => {
			$http.get(`${FirebaseURL}/movies.json?orderBy="uid"&equalTo"${firebaseAuthFactory.currentUserID}"`)
			.success((movieObject) => {
				let movieCollection = movieObject;
				Object.keys(movieCollection).forEach((key) => {
					movieCollection[key].id = key;
					movies.push(movieCollection[key]);
				});
				resolve(movieObject);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//add a totally new movie to firebase
	var postNewMovie = function(newMovie) {
		return $q((resolve, reject) => {
			$http.post(
				`${FirebaseURL}/movies.json`,
				JSON.stringify(newMovie)
				)
			.success((objFromFirebase) => {
				resolve(objFromFirebase);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	//PUT function to edit rating

	//DELETE function to remove from DB

	return {getMovieList, postNewMovie}
})