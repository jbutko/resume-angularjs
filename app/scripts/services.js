'use strict';

var Token;

angular
	.module('portfolioNgApp.factory', [])
	.factory('FetchData', ['$http',
		function FetchData($http) {

			var factory = {};

			factory.featured = [];

			factory.getFeatured = function() {
				return $http({
					method: 'GET',
					url: '/portfolioNG/app/assets/data/appData.json',
					//url: '/resumeNG1/assets/data/appData.json',
					cache: true
				}).success(function(data) {
						// magic line, we resolve the data IN the factory!
						factory.featured = data;
					})
					.error(function(data, status, headers, config) {
						console.log(status);
					});
				};

			factory.careerYears = function() {
				var careerYears = {},
					start_date, end_date, total_months, years, yearsWord, months;

					careerYears.start_date = new Date(2012, 9, 1); //Create start date object by passing appropiate argument
					careerYears.end_date = new Date();
					careerYears.total_months = (careerYears.end_date.getFullYear() - careerYears.start_date.getFullYear())*12 + (careerYears.end_date.getMonth() - careerYears.start_date.getMonth());
					careerYears.years = Math.floor(careerYears.total_months / 12);
					careerYears.yearsWord = careerYears.years === 1 ? 'year' : 'years';
					careerYears.months = careerYears.total_months % 12;

					return careerYears;
			}

			return factory;

		}]);

