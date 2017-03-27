'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
  .controller('lytzyCtrl', ["$scope", "$http","$location","$state", function($http, $location, $scope, $state) {
  
		$scope.tc=function(){
			alert(1)
		}
  }]);