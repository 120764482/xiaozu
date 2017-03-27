'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')     
	.controller('lzjlCtrl', ["$scope","$http", function($scope,$http) {
		$scope.lianxijilu = '联系记录';
		$scope.pageNow=1;
		$scope.page=5;
		$scope.totalPage=0;
		//遍历
		 $scope.arr = [];
		 $http({
			url: 'http://47.88.16.225:411/kehu/?{"shi":"联系记录"}',
			method: "get",
			data: {}
		}).then(function(data) {
			$scope.tiaoo = data.data.length;
			$scope.arr = data.data;
			$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
		})
		
		
		$scope.rise = false;
		$scope.addd = function() {
			$scope.rise = true;
		}
		$scope.dell = function() {
			$scope.rise = false;
		}
		//全选
		 $scope.iCkeck = false;
	     $scope.checkall = false;
		  $scope.checkAll = function(){
		  	if($scope.checkall){
		  		$scope.iCkeck = true;
		  	}else{
		  		$scope.iCkeck = false;    
		  	}
		  }
		  
		 //删除
		 $scope.delter = function(a,$index){
			$http({
				url: "http://47.88.16.225:411/kehu/"+a,
				method: "delete",
				
			}).then(function(data) {
				$scope.arr.splice($index,1);
				window.location.reload()
			})
		} 
		 //保存
		 $scope.baocunr = function() {
		 	var arys = $scope.oninas+ '年' +$scope.yues+'月'+$scope.ris+"日"
			$http({
				url: "http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
				method: "post",
				data: {
					"username": localStorage.userName,
					"password": localStorage.passWord,
					"duiyingkehu": $scope.duiyingkehu,
					"lianxineirong": $scope.user_neirong,
					"lianxiriqi":  arys,
					"lianxiren":  $scope.user_lianxiren,
					"zhixingren":  $scope.zhixingren,
					"tel": $scope.jobphone,
					"shi":$scope.lianxijilu
				}
			}).then(function(data) {
				window.location.reload()
			})

			$scope.rise = false;

		}
		 //查询
		 $scope.cha = function() {
			$http({
				url: "http://47.88.16.225:411/kehu?tel=" + $scope.oPhone, //$scope.oPhone
				method: "get"
			}).then(function(data) {
				$scope.arr = data.data
			})
		}
		 
		var timers = null;
		$scope.ofocus = function(){
			timers = setInterval(function(){
				if($scope.oPhone == ''){
					$http({
						url: "http://47.88.16.225:411/kehu/",
						method: "get",
						data: {}
					}).then(function(data) {
						$scope.tiaoo = data.data.length;
						$scope.arr = data.data;
						$scope.arr = $scope.arr.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
						clearInterval(timers)
					})
				}
			},500)
		}
		$scope.oblur = function(){
			clearInterval(timers)
		}
		 
		 
		 
		 
		 
		 
		 //上一页  下一页
		 $http({
			url:"http://47.88.16.225:411/kehu"
			,type:"get"
			
		}).then(function(req){
			$scope.totalPage=Math.ceil(req.data.length/$scope.page);
		},function(){
			console.log("请求失败")
		})
		
		$scope.shang=function(){
			if($scope.pageNow<=1){
				$scope.pageNow=1
			}else{
				$scope.pageNow--;
				$http({
					url: "http://47.88.16.225:411/kehu/",
					method: "get",
					data: {}
				}).then(function(data) {
					$scope.tiaoo = data.data.length;
					$scope.arr = data.data;
					$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
				})
				
				
			}
			
		}
		$scope.next=function(){
			if($scope.pageNow>=$scope.totalPage){
				$scope.pageNow=$scope.totalPage
			}else{
				$scope.pageNow++;
				$http({
					url: "http://47.88.16.225:411/kehu/",
					method: "get",
					data: {}
				}).then(function(data) {
					$scope.tiaoo = data.data.length;
					$scope.arr = data.data;
					$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
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
		
		$scope.oris = [];
		for(var i =1;i<31;i++){
			$scope.oris.push(i)
		}
		 
	}]);