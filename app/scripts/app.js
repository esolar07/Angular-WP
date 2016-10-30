'use strict';

/**
 * @ngdoc overview
 * @name profileApp
 * @description
 * # profileApp
 *
 * Main module of the application.
 */
angular
  .module('profileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtr'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
