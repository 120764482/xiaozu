'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')  
	.controller('lzCtrl', ["$scope", "$http", function($scope, $http) {
		//邮政验证
		var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		$("#youxiang").blur(function() {

			var passValue = $('#youxiang').val();
			if(!email.test(passValue)) {
				$('#pp').html('请填写正确的邮箱').css('color', 'red')
			} else {
				$('#pp').html('OK').css('color', 'green')
			}
		})
		
		//QQ验证
		 var reg=/^\d{5,10}$/; 
		$("#user_QQ").blur(function() {

			var passValuee = $('#user_QQ').val();
			if(!reg.test(passValuee)) {
				$('#qq').html('长度在5-10').css('color', 'red')
			} else {
				$('#qq').html('OK').css('color', 'green')
			}
		})
		
		//手机号验证
		var phone = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
		$("#phone").blur(function() {

			var passValuee = $('#phone').val();
			if(!phone.test(passValuee)) {
				$('#oPhone').html('请输入正确格式').css('color', 'red')
			} else {
				$('#oPhone').html('手机号正确').css('color', 'green')
			}
		})
		
		
		
		
		
		$scope.oPhone = ''
		$scope.pageNow = 1;
		$scope.page = 5;
		$scope.totalPage = 0;

		$scope.ary = [];
		$scope.rise = false;
		$scope.add = function() {
			$scope.rise = true;
		}
		$scope.del = function() {
				$scope.rise = false;
			}
			//全选
		$scope.iCkeck = false;
		$scope.checkall = false;
		$scope.checkAll = function() {
			if($scope.checkall) {
				$scope.iCkeck = true;
			} else {
				$scope.iCkeck = false;
			}
		}

		$scope.nan = '男';
		$scope.nv = '女';
		$scope.lianxiren="联系人";
		$scope.kehu="客户";
		$scope.user_name = '';
		$scope.user_QQ = "";
		$scope.jobphone = "";
		$scope.emialaddr = "";
		$scope.zhiwei = "";
		$scope.state = "";
		$scope.yues = '';
		$scope.oninas = '';
		//添加
		$scope.baocun = function() {
			console.log($scope.emialaddr)
				if($scope.yues == '' || $scope.oninas == ''){
					alert('请填写信息')
					return;
				}
				var arys = $scope.oninas+ '年' +$scope.yues+'月'
				console.log(arys)
				if($scope.user_name == '' || $scope.user_QQ == "" || $scope.jobphone == "" || $scope.emialaddr == "" || $scope.zhiwei == "" || $scope.state == "") {
					alert("请填写信息");
				} else {
					$http({
						url: "http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
						method: "post",
						data: {
							"username": localStorage.userName,
							"password": localStorage.passWord,
							"xingming": $scope.user_name,
							"qq": $scope.user_QQ,
							"dianhua": $scope.jobphone,
							"email": $scope.emialaddr,
							"zhiwei": $scope.zhiwei,
							"xingbie": $scope.state,
							"shengri": arys,
							"shi":$scope.leixing
						}
					}).then(function(data) {
						window.location.reload()
					})
				}

				$scope.rise = false;
			}
			//遍历  
		$http({  
			url: 'http://47.88.16.225:411/kehu/?{"shi":"联系人"}',
			method: "get",
			data: {}
		}).then(function(data) {
			$scope.tiao = data.data.length;
			$scope.ary = data.data;
			$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
		})
		
		//鼠标离开input时显示状态
		var timers = null;
		$scope.ofocus = function(){
			timers = setInterval(function(){
				if($scope.oPhone == ''){
					$http({
						url: "http://47.88.16.225:411/kehu/",
						method: "get",
						data: {}
					}).then(function(data) {
						$scope.tiao = data.data.length;
						$scope.ary = data.data;
						$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
						clearInterval(timers)
					})
				}
			},500)
		}
		$scope.oblur = function(){
			clearInterval(timers)
		}

		//删除
		$scope.deler = function(a, $index) {
			$http({
				url: "http://47.88.16.225:411/kehu/" + a,
				method: "delete",

			}).then(function(data) {
				$scope.ary.splice($index, 1);
				window.location.reload()
			})
		}

		//查询
		$scope.cha = function() {
			$http({
				url: "http://47.88.16.225:411/kehu?dianhua=" + $scope.oPhone, //$scope.oPhone
				method: "get"
			}).then(function(data) {
				$scope.ary = data.data
			})
		}
		
		
		
			//上一页  下一页
		$http({
			url: "http://47.88.16.225:411/kehu",
			type: "get"

		}).then(function(req) {
			$scope.totalPage = Math.ceil(req.data.length / $scope.page);
		}, function() {
			console.log("请求失败")
		})

		$scope.shang = function() {
			if($scope.pageNow <= 1) {
				$scope.pageNow = 1
			} else {
				$scope.pageNow--;
				$http({
					url: "http://47.88.16.225:411/kehu/",
					method: "get",
					data: {}
				}).then(function(data) {
					$scope.tiao = data.data.length;
					$scope.ary = data.data;
					$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
				})

			}

		}
		$scope.next = function() {

			if($scope.pageNow >= $scope.totalPage) {
				$scope.pageNow = $scope.totalPage
			} else {
				$scope.pageNow++;
				$http({
					url: "http://47.88.16.225:411/kehu/",
					method: "get",
					data: {}
				}).then(function(data) {
					$scope.tiao = data.data.length;
					$scope.ary = data.data;
					$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
				})

			}

		}
		
		
//		年月
		$scope.odatas = [];
		for(var i =1989;i<2001;i++){
			$scope.odatas.push(i)
		}
		
		$scope.oyeays = [];
		for(var i =1;i<13;i++){
			$scope.oyeays.push(i)
		}
	}]); 