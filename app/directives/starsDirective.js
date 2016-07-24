"use strict";

app.directive("starRating", () =>{
	return {
		restrict: 'EA',
		templateURL: "../templates/starRating.html"
	}
})