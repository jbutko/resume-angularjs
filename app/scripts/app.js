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


				// For any unmatched url, redirect to home: /
				$urlRouterProvider.otherwise("/");
				//
				// Now set up the states
				$stateProvider
						.state('works', {
								url: "/works",
								templateUrl: "views/works.html",
								controller: 'WorksCtrl'
						})
						// tag state - after clicking on filter tag
						.state('works.tag', {
								url: "/:tag/:CSSid",
								controller: 'WorksCtrl'
						})
						.state('works.single', {
								url: "/:CSSid",
								controller: 'WorksCtrl'
						})
						.state('home', {
								url: "/",
								templateUrl: "views/main.html",
								controller: 'MainCtrl'
						});

				// pretty HTML5 links
				// if (window.history && window.history.pushState) {
				// 	$locationProvider.html5Mode(false);
				// }

	}])
	// Lodash global implementation
	.constant('_', window._)
	 // use lodash in views, ng-repeat="x in _.range(3)"
	.run(function($rootScope) {
		$rootScope._ = window._;
	});
