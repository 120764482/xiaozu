'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
  .controller('yrkCtrl',["$scope","$http","myServe", function ($scope,$http,myServe) {
//	var user = myServe.username;
	var user = localStorage.user;
  	console.log(user);
  	$scope.pageNow=1;
  	$scope.page=5;
	$scope.totalPage=0;
	//遍历数组
	$scope.arr = [];
	$http({
		url: "http://47.88.16.225:411/kehu/",
		method: "get",
		data: {}
	}).then(function(data) {
		$scope.tiaoo = data.data.length;
		$scope.arr = data.data;
		$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
	})
	
    var arr1=[
            ['客户名称、简称、电话、联系人'],
            [''],
	        ['初步接触','揣摩客户需要','处理异议'],
	        ['个人客户','团队客户'],
	        ['']
	];
	$('#ss').change(function(){
		var a=$('#ss').val();
		fn(a)
	})	
	function fn(x){
		$('#cs').empty();
		for(var i=0;i<arr1[x-2].length;i++){
				$('#cs').append('<option>'+arr1[x-2][i]+'</option>')
		}
	}
	
	//查询
	$scope.btn=function(){
		
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
	
	//操作
		//修改
			$scope.bbbb=false;
			$scope.xiugai=function(){
				$scope.bbbb=true;
			}
			$scope.guan1=function(){
				$scope.bbbb=false;
			}
			//确认修改
			$scope.queren1=function(){
				$http({
					url:"http://47.88.16.225:411/kehu/?uid="+localStorage.uid,
					method:"post",
					data:{
						"jieduan":$scope.jieduan,
						"suozaigongsi":$scope.suozaigongsi,
						"yingxiaojieduan":$scope.yingxiaojieduan,
						"leixing":$scope.leixing,
						"xingming":$scope.xingming,
						"xingbie":$scope.xingbie,
						"dianhua":$scope.dianhua,
						"zhixingren":$scope.zhixingren,
						"qq":$scope.qq,
						"email":$scope.email,
						"lianxiriqi":$scope.lianxiriqi
					}
				}).then(function(data){
					
				})
				$scope.bbbb=false;
			}
		
		//编写
			$scope.rise = false;
			$scope.bianxie = function() {
				$scope.rise = true;
			}
			$scope.dell = function() {
				$scope.rise = false;
			}
			//保存
			$scope.baocunr = function() {
					$http({
						url: "http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
						method: "post",
						data: {
							"username": localStorage.userName,
							"password": localStorage.passWord,
							"duiyingkehu": $scope.duiyingkehu,
							"lianxineirong": $scope.user_neirong,
							"lianxiriqi":  $scope.user_lianxiriqi,
							"lianxiren":  $scope.user_lianxiren,
							"zhixingren":  $scope.zhixingren,
							"tel": $scope.jobphone
						}
					}).then(function(data) {
						window.location.reload()
					})
					$scope.rise = false;
				}
		
		
		
	
	// 个人客户
//	$http({
//		url:"http://47.88.16.225:411/kehu/",
//		method:"get",
//		data:{}
//	}).then(function(data){
//		var cusArr = [];
//		var data2 = data.data;
//		for(var i=0; i<data2.length; i++){
//			if(data2[i].zhixingren == user){
//		      cusArr.push(data2[i]);
//		    }
//		}
//		$scope.arr = cusArr;
//		console.log($scope.arr);
//	})
//	
	//放入公海
	$scope.gonghai = function(id){
		alert(id);
		$http({
			url:"http://47.88.16.225:411/kehu/" + id,
			type:"put",
			data: {"zhixingren": "public"}
		}).then(function(req){
			console.log(req);
		},function(){
			console.log("修改失败！");
		})
		
	}
	
	//分页
	$http({
		url:"http://47.88.16.225:411/kehu",
		type:"get"
	}).then(function(req){
		$scope.totalPage=Math.ceil(req.data.length/$scope.page);
	},function(){
		console.log("请求失败");
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
	
	
  }]);