'use strict';

angular
  .module('portfolioNgApp', [
    'ngResource',
    'ngRoute',
    'portfolioNgApp.controller',
    'portfolioNgApp.factory',
    'ngAnimate'
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
