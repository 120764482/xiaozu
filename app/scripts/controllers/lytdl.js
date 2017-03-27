'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
	.service("myServe", function(){
		var username = "";
	})
	.controller('lytdlCtrl', function($http, $stateParams, $location, $scope, $state) {
		var name = /^[a-zA-Z]\w{3,15}$/ig; //用户名验证
		$("#username").blur(function() {
			if($(this).val().match(name)) {
				$(this).next().html('用户名正确').css("color", "green");
			} else if($(this).val() == null) {
				$(this).next().html('用户名不能为空').css("color", "red");
			} else {
				$(this).next().html('请输入正确格式').css("color", "red");
			}
		})
		var psd = /^[a-zA-Z]\w{5,17}$/; //密码验证
		$("#psd").blur(function() {
			if($(this).val().match(psd)) {
				$(this).next().html('密码正确').css("color", "green");
			} else {
				$(this).next().html('请输入正确的格式').css("color", "red");
			}
		})
		
		if(localStorage.userName) {
			$scope.user = localStorage.userName
		}
		if(localStorage.passWord) {
			$scope.psd = localStorage.passWord
		}
		$scope.dl=function(){
			$http({
				url:"http://47.88.16.225:411/users/login",
				method:"POST",
				data:{"username":$scope.user,"password":$scope.psd}
			}).then(function(e){
				console.log(e.data)
				localStorage.uid=e.data.uid
				console.log(localStorage.uid)
				$state.go("lytzy.yrk")
			},function(){
				alert("登录失败")
			})
		}
		$scope.zc=function(){
			$state.go("lyt")
		}
	});