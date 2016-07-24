"use strict";

app.factory("dataFactory", function(FirebaseURL,$q, $http, firebaseAuthFactory) {

	//get movies from firebase
	const getMovieList = function() {
		let movies = [];
		return $q((resolve, reject) => {
			$http.get(`${FirebaseURL}/movies.json?orderBy="uid"&equalTo"${firebaseAuthFactory.currentUserID}"`)
			.success((movieObject) => {
				let movieCollection = movieObject;
				Object.keys(movieCollection).forEach((key) => {
					movieCollection[key].id = key;
					movies.push(movieCollection[key]);
				});
				resolve(movies);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//add a totally new movie to firebase
	const postNewMovie = function(newMovie) {
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

	const putEdits = function(movie) {
		return $q((resolve, reject) => {
			$http.put(`${FirebaseURL}/movies/${movie.id}.json`, movie)
			.success((data) => {
				// console.log("Data from delete", data );
				resolve(data);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	const deleteMovie = function(listMovieID) {
			console.log(listMovieID, "this is delete movie");
			return $q((resolve, reject) => {
				$http.delete(
					`${FirebaseURL}/movies/${listMovieID}.json`
				)
				.success((data) => {
					// console.log("Data from delete", data );
					resolve(data);
				})
				.error((error) => {
					reject(error);
				});
			});
		};	
	return {getMovieList, postNewMovie, deleteMovie, putEdits};
});