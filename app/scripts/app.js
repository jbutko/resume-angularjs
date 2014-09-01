'use strict';

angular
  .module('portfolioNgApp', [
    'ngResource',
    'ngRoute',
    'portfolioNgApp.controller',
    'portfolioNgApp.factory'
  ])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/works', {
          templateUrl: 'views/works.html',
          controller: 'WorksCtrl'
        })
        // when('/works/:id', {
        //     templateUrl: 'views/works-detail.html',
        //     controller: 'WorkDetailCtrl'
        // })
        .otherwise({
          redirectTo: '/'
        });

        // pretty HTML5 links
        $locationProvider.html5Mode(true);
  }]);
