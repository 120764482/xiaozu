'use strict';

/**
 * @ngdoc overview
 * @name lytappApp
 * @description
 * # lytappApp
 *
 * Main module of the application.
 */
angular
	.module('lytappApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngTouch',
		'ui.router'
	])
	.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('lyt', {
				url: '/lyt',
				templateUrl: "views/lyt.html"
			})
			.state('lytdl', {
				url: '/lytdl',
				templateUrl: "views/lyzdl.html"
			})
			.state('lytzy', {
				url: '/lytzy',
				templateUrl: "views/lytzy.html"
			})
			.state('lytzy.wx',{
				url:'/wx',
				templateUrl:"views/wxadd.html"
			})
			.state('lytzy.yrk',{
				url:'/yrk',
				templateUrl:"views/yrk.html"
			})
			.state('lytzy.lz',{
				url:'/lz',
				templateUrl:"views/lz.html"
			})
			.state('wx',{
				url:'/wx',
				templateUrl:"views/wx.html"
			})
			.state('lytzy.lzjl',{
				url:'/lzjl',
				templateUrl:"views/lzjl.html"
			})
			.state('lytzy.mrx',{
				url:'/mrx',
				templateUrl:"views/mrx.html"
			})
		$urlRouterProvider.otherwise("/lytdl");
	}])