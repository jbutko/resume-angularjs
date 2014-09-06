'use strict';

angular
	.module('portfolioNgApp.controller', ['ngRoute'])
	.controller('MainCtrl', ['$scope', '$http', 'FetchData', '$location',
		function($scope, $http, FetchData, $location) {

			// Check current location
			// var currentLocation = $location.path();

			// // if currentLocation === home then we are not on the portfolio sub page, otherwise we are on portfolio subpage
			// currentLocation === '/' ? $scope.showPortfolio = '' : $scope.showPortfolio = 'works';
			// $scope.showMePortfolio = function() {
			// 	// toggle showPortfolio variable on every click based on ternary operater above
			// 	$scope.showPortfolio = $scope.showPortfolio === '' ? 'works' : '';
			// };

			console.log($scope.data);

			FetchData.getFeatured().then(function() {
				$scope.data = {};
				// if ($scope.data.length > 1) {
				//     return;
				// }
			    $scope.data = FetchData.featured;
			    //var obj = FetchData.featured;
			    //console.log($scope.data);
			});

			// Since when am I into web development?
			// call service for carrer years calculation
			var careerYears = FetchData.careerYears();

			// assign calculated data to $scope
			$scope.careerYears = careerYears.years;
			$scope.careerYearsWord = careerYears.yearsWord;
			$scope.careerMonths = careerYears.months;

	}])
	.controller('WorksCtrl', ['$scope', '$http', 'FetchData', '$location',
		function($scope, $http, FetchData, $location) {

			FetchData.getFeatured().then(function() {
				$scope.data = {};
				// if ($scope.data.length > 1) {
				//     return;
				// }
			    $scope.data = FetchData.featured;
			    //var obj = FetchData.featured;
			    //console.log($scope.data);
			});

			$scope.show = false;

			// default portfolio item which will be opened after refresh/works page open
			$scope.itemTitleToShow = 'stickynavbar';
			$scope.showPortfolioItem = function(event) {

				//console.log(event);
				$scope.show = !$scope.show;
				var clickedItemID = angular.element(this);

				// get the CSSid value of clicked portfolio image - corresponding description will be opened
				$scope.itemTitleToShow = clickedItemID[0].element.CSSid;
				//console.log($scope.itemTitleToShow);
			}

			$scope.portfolioFilter = function(event) {

				var clickedTag = angular.element(this);
				console.log(clickedTag);

				$scope.thumbToShow = clickedTag[0].tag.toUpperCase();
				//console.log(event.srcElement.innerText.toUpperCase());
				//console.log($scope.thumbToShow);
			}

			// $scope.data = FetchData.featured;
			// console.log($scope.data);

	}])
	.controller('WorkDetailCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$scope.id = $routeParams.id;
			console.log($scope.id);
	}]);
