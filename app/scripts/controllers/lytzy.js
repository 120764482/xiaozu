'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')  
	.controller('lytzyCtrl', ["$scope", "$http","$location", function($scope, $http,$location){
		$scope.tuichu=function(){
			localStorage.clear();
			sessionStorage.clear();
			$location.url('/lytdl');  
		}
	}])