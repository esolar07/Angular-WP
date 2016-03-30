'use strict';

/**
 * @ngdoc function
 * @name profileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the profileApp
 */
angular.module('profileApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
