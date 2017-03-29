'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
  .controller('lytzyCtrl',function($scope, $state) {
  	$scope.tcdl=function(){
  		localStorage.clear()
  		$state.go("lytdl")
  	}
  });