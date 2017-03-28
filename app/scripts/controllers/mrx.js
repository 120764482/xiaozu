'use strict';-

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
.controller('mrxCtrl',["$scope","$http",function ($scope,$http) {
	$scope.pageNow=1;
  	$scope.page=5;
	$scope.totalPage=0;	
	$scope.aa=false;
//全选
	$scope.iCkeck=false;
	$scope.gb=false;	
	$scope.sc=false;
	$scope.checkAll=function(){
		$scope.iCkeck=!$scope.iCkeck;
	}
	$scope.cli=function(){
		$scope.aa=!$scope.aa;   
	}
//批量分配
	   	
		$scope.fp=function(){ 
			if(!$scope.iCkeck&&$scope.aa!=true){
		 		 alert("请先选择数据");
		   }else{			
				$scope.gb=true; 
			}
		}
//关闭
	 
	$scope.close=function(){
	 	$scope.gb=false;
	 }
	
//删除
	 $scope.del=function(obj){
		
		$http({
			url:"http://47.88.16.225:411/kehu/" + obj.id,
			method:"POST",
			data: {
				_method:"delete"
			}
		}).then(function(req){
			alert("删除成功")
			location.reload();
		},function(){
			console.log("修改失败！");
		})
	 }
//查询	 
	  $scope.cha=function(){
	  	$http({
	  		url: "http://47.88.16.225:411/kehu?mingcheng="+$scope.omingcheng,
	  		method:"get",
	  	}).then(function(data){
	  		$scope.arr=data.data
	  	})
	  }
	 
	 
//查询

//分页
//	$http({
//		url:"http://47.88.16.225:411/kehu",
//		method:"get"
//	}).then(function(req){
////		$scope.pageNow=1;
////		$scope.totalPage=Math.ceil(req.data.length/$scope.page);
////		$scope.tiao = req.data.length;
//		$scope.arr = req.data;
////		$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
//	},function(){
//		console.log("请求失败");
//	})
//上一页	
	$scope.prev=function(){
		if($scope.pageNow<=1){
			$scope.pageNow=1
		}else{
			$scope.pageNow--;
			$http({
				url: "http://47.88.16.225:411/kehu/",
				method: "get",
				data: {}
			}).then(function(data) {
				var cusArr = [];
				var data2 = data.data;
				for(var i=0; i<data2.length; i++){
					if(data2[i].zhixingren == "public"){
				      cusArr.push(data2[i]);
				    }
				}
				$scope.pageNow=1;
				$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
				$scope.tiao = cusArr.length;
				$scope.arr = cusArr;
				$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
			})
			
		}
		
	}
//下一页
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
				var cusArr = [];
				var data2 = data.data;
				for(var i=0; i<data2.length; i++){
					if(data2[i].zhixingren == "public"){
				      cusArr.push(data2[i]);
				    }
				}
				$scope.pageNow=1;
				$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
				$scope.tiao = cusArr.length;
				$scope.arr = cusArr;
				$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
			})
			
		}
		
	}
//
////获取列表
   	$http({
   		url:"http://47.88.16.225:411/kehu/",
   		method:"get"
   	}).then(function(data){
   		
   		var cusArr = [];
		var data2 = data.data;
		for(var i=0; i<data2.length; i++){
			if(data2[i].zhixingren == "public"){
		      cusArr.push(data2[i]);
		    }
		}
		$scope.pageNow=1;
		$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
		$scope.tiao = cusArr.length;
		$scope.arr = cusArr;
		$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
//		$scope.arr = cusArr;
//		console.log(cusArr);
   	})

   //放入客户管理
//	$scope.gonghai = function(id, obj){
//		$http({
//			url:"http://47.88.16.225:411/kehu/" + id,
//			method:"put",
//			data: {
//				"duiyingkehu": obj.duiyingkehu,
//				"lianxineirong": obj.lianxineirong,
//				"lianxiriqi":  obj.lianxiriqi,
//				"lianxiren":  obj.lianxiren,
//				"zhixingren":  "a123456",
//				"tel": obj.tel
//			}
//		}).then(function(req){
//			alert(req)
//		},function(){
//			console.log("修改失败！");
//		})
//	}
//保存
   $scope.chu=function(){
// 		$scope.gb=false;
// 		$http({
// 			url:"http://47.88.16.225:411/kehu/"
// 			,method:"put"
// 		}).then(function(req){
// 			
// 			
// 		},function(){
// 			console.log("请求失败")	
// 		})
   }
   
 //放入客户管理  
   $scope.kehu = function(obj){
		$http({
			url:"http://47.88.16.225:411/kehu/" + obj.id,
			method:"put",
			data: {
				"duiyingkehu": obj.duiyingkehu,
				"lianxineirong": obj.lianxineirong,
				"lianxiriqi":  obj.lianxiriqi,
				"lianxiren":  obj.lianxiren,
				"zhixingren":  "a123456",
				"tel": obj.tel
			}
		}).then(function(req){
			alert("success");        
			location.reload();
		},function(){
			console.log("修改失败！");
		})
	}
}]);
