'use strict';
/**
 * @ngdoc function
 * @name profileApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the profileApp
 */

angular.module('profileApp')
  .controller("ContactCtrl", function($scope){
     this.tab = 1;

     this.selectTab = function(setTab) {
       this.tab = setTab;
     };
     this.isSelected = function(checkTab){
       return this.tab === checkTab;
     };
   });
