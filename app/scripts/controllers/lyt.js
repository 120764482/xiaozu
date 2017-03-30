'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
	.controller('lytCtrl', function($http, $stateParams, $location, $scope, $state) {
		//var username,psd,qrpsd,phone,email,ren,
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

		var qrpsd = /^[a-zA-Z]\w{5,17}$/; //确认密码验证
		$("#qrpsd").blur(function() {
			if($(this).val().match(qrpsd)) {
				$(this).next().html('密码正确').css("color", "green");
			} else {
				$(this).next().html('请输入正确的格式').css("color", "red");
			}

		})
		var phone = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; //手机验证
		$("#phone").blur(function() {
				if($(this).val().match(phone)) {

					$(this).next().html('手机号正确').css("color", "green");
				} else {
					$(this).next().html('请输入正确格式').css("color", "red");
				}
			})
			//邮箱验证
		var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		$("#email").blur(function() {

				if($(this).val().match(email)) {

					$(this).next().html('邮箱正确').css("color", "green");
				} else {
					$(this).next().html('请输入正确格式').css("color", "red");
				}
			})
			//联系人验证
		var ren = /^[\u4e00-\u9fa5]{0,}$/;
		$("#ren").blur(function() {

			if($(this).val().match(ren)) {

				$(this).next().html('联系人正确').css("color", "green");
			} else {
				$(this).next().html('请输入正确格式').css("color", "red");
			}
		})
		var ren = /^[\u4e00-\u9fa5]{0,}$/;
		$("#gongsi").blur(function() {

			if($(this).val().match(ren)) {

				$(this).next().html('公司正确').css("color", "green");
			} else {
				$(this).next().html('请输入正确格式').css("color", "red");
			}
		})
		$scope.zc = function() {
			$http({
				url: "http://47.88.16.225:411/users/",
				method: "POST",
				data: {
					"username": $scope.username,
					"password": $scope.psd,
					"phone": $scope.phone,
					"email": $scope.email
				}

			}).then(function(data) {
				//console.log(data)
				localStorage.userName=$scope.username;
				localStorage.passWord=$scope.psd;
//				console.log(localStorage.userName)
//				console.log(localStorage.passWord)
				$state.go("lytdl")
			},function(){
				alert("注册失败")
			})

		}

	});