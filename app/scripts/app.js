'use strict';

angular
	.module('portfolioNgApp', [
		'ngResource',
		'ngRoute',
		'portfolioNgApp.controller',
		'portfolioNgApp.factory',
		'portfolioNgApp.directive',
		'ngAnimate',
		'ngFx',
		'ui.router'
	])
	.config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
		function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

			// $routeProvider
			//   .when('/', {
			//     templateUrl: 'views/main.html',
			//     controller: 'MainCtrl'
			//   })
			//   .when('/works', {
			//     templateUrl: 'views/works.html',
			//     controller: 'WorksCtrl'
			//   })
			//   // when('/works/:id', {
			//   //     templateUrl: 'views/works-detail.html',
			//   //     controller: 'WorkDetailCtrl'
			//   // })
			//   .otherwise({
			//     redirectTo: '/'
			//   });

	//
				// For any unmatched url, redirect to /state1
				$urlRouterProvider.otherwise("/");
				//
				// Now set up the states
				$stateProvider
						.state('works', {
								url: "/works",
								templateUrl: "views/works.html",
								controller: 'WorksCtrl'
						})
						.state('works.tag', {
								url: "/:tag/:CSSid",
								//templateUrl: "views/works.tag.html",
								controller: 'WorksCtrl'
						})
						.state('works.single', {
								url: "/:CSSid",
								//templateUrl: "views/works.tag.html",
								controller: 'WorksCtrl'
						})
						.state('home', {
								url: "/",
								templateUrl: "views/main.html",
								controller: 'MainCtrl'
						});
						// .state('state2.list', {
						// 		url: "/list",
						// 		templateUrl: "partials/state2.list.html",
						// 		controller: function($scope) {
						// 				$scope.things = ["A", "Set", "Of", "Things"];
						// 		}
						// });


				// pretty HTML5 links
				if (window.history && window.history.pushState) {
					$locationProvider.html5Mode(false);
				}

	}])
	// Lodash global implementation
	.constant('_', window._)
	 // use in views, ng-repeat="x in _.range(3)"
	.run(function($rootScope) {
		$rootScope._ = window._;
	});
