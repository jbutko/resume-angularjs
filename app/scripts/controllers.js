'use strict';

angular
	.module('portfolioNgApp.controller', ['ngRoute'])
	.controller('MainCtrl', ['$scope', '$http', 'FetchData', '$location',
		function($scope, $http, FetchData, $location) {

			// Check current location
			var currentLocation = $location.path();

			// if currentLocation === home then we are not on the portfolio sub page, otherwise we are on portfolio subpage
			currentLocation === '/' ? $scope.showPortfolio = '' : $scope.showPortfolio = 'works';
			$scope.showMePortfolio = function() {
				// toggle showPortfolio variable on every click based on ternary operater above
				$scope.showPortfolio = $scope.showPortfolio === '' ? 'works' : '';
			};

			console.log($scope.data);

			FetchData.getFeatured().then(function() {
				$scope.data = {};
				if ($scope.data.length > 1) {
				    return;
				}
			    $scope.data = FetchData.featured;
			    console.log($scope.data);
			});

			// Since when am I into web development?
			var careerYears = {},
				start_date, end_date, total_months, years, yearsWord, months;

				careerYears.start_date = new Date(2012, 9, 1); //Create start date object by passing appropiate argument
				careerYears.end_date = new Date();
				careerYears.total_months = (careerYears.end_date.getFullYear() - careerYears.start_date.getFullYear())*12 + (careerYears.end_date.getMonth() - careerYears.start_date.getMonth());
				careerYears.years = Math.floor(careerYears.total_months / 12);
				careerYears.yearsWord = careerYears.years === 1 ? 'year' : 'years';
				careerYears.months = careerYears.total_months % 12;

				$scope.careerYears = careerYears.years;
				$scope.careerYearsWord = careerYears.yearsWord;
				$scope.careerMonths = careerYears.months;

	}])
	.controller('WorksCtrl', ['$scope', '$http', 'FetchData', '$location',
		function($scope, $http, FetchData, $location) {

			var currentLocation = $location.path();

			currentLocation === '/' ? $scope.showPortfolio = '' : $scope.showPortfolio = 'works';
			$scope.showMePortfolio = function() {
				$scope.showPortfolio = $scope.showPortfolio === '' ? 'works' : '';
			};

			$scope.data = FetchData.featured;
			console.log($scope.data);

	}])
	.controller('WorkDetailCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$scope.id = $routeParams.id;
			console.log($scope.id);
	}]);
