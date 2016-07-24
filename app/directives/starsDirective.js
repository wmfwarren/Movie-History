"use strict";

app.directive("starRating", function () {
	console.log("Star directive started");
	return {
		restrict: 'A',
		// scope: true,
		templateURL: "../../templates/starRating.html"
	};
});