'use strict';

angular
	.module('portfolioNgApp.controller', ['ngRoute'])
	.controller('MainCtrl', ['$scope', '$http', 'FetchData', '$location',
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

			// Fetch all data from main JSON file
			FetchData.getFeatured().then(function() {

				// All data from JSON file will be available through $scope.data object
			    $scope.data = FetchData.featured;

			    // Base for filtered items
			    // Default state: fetch all portfolio data, later on we change filteredData array based on filter value
			    var filteredData = [];

			    // Loop through every projectItem and push it to filteredData array
			    angular.forEach($scope.data.projects.projectItems, function(value , key) {

			    	filteredData.push(value);

			    });

			    // assign filteredData to $scope
			    $scope.filteredData = filteredData;

			});

			$scope.show = false;

			// default portfolio item which will be shown after refresh/initial page load
			$scope.itemTitleToShow = 'stickynavbar';
			$scope.showPortfolioItem = function(event) {

				$scope.show = !$scope.show;

				// Which portfolio thumbnail was clicked?
				var clickedItemID = angular.element(this);

				// Now get the CSSid value of clicked portfolio image and open corresponding description
				$scope.itemTitleToShow = clickedItemID[0].element.CSSid;
			}

			var filteredData = [];
			$scope.portfolioFilter = function(event) {

				_.remove(filteredData);


				// Define variables
				var clickedTag = angular.element(this), // clicked tag's object
					clickedTagName; // value of clicked tag

				// Get the value of clicked tag, eg. 'Responsive' or 'CSS'
				$scope.clickedTagName = clickedTag[0].tag;

				angular.forEach($scope.data.projects.projectItems, function(value , key) {


					// If the projectItem's tag array contains value of clicked tag add whole projectItem object to the 'filteredData' array
					if (_.contains(value.tags, $scope.clickedTagName)) {
						filteredData.push(value);
					// In case we click on 'All' tag load all thumbnails
					} else if ( $scope.clickedTagName === 'All' ) {
						filteredData.push(value);
					}

				});

				// filtered data object containing only objects that contains clicked tag
				$scope.filteredData = filteredData;

				// set description according to first thumbnail
				$scope.itemTitleToShow = filteredData[0].CSSid;

			}

	}])
	.controller('WorkDetailCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$scope.id = $routeParams.id;
			console.log($scope.id);
	}]);
