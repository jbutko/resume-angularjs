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
					cache: true
				}).success(function(data) {
						// magic line, we resolve the data IN the factory!
						factory.featured = data;
					})
					.error(function(data, status, headers, config) {
						console.log(status);
					});
				};

			return factory;

		}]);

