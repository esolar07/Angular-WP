'use strict';

/**
 * @ngdoc function
 * @name profileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profileApp
 */
angular.module('profileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.title = 'The Lemonade Stand';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
