'use strict';

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
  .controller('yrkCtrl',["$scope","$http","myServe","$filter", function ($scope,$http,myServe,$filter) {
	$scope.bool = true;
	$http({
<<<<<<< HEAD
			url: "http://47.88.16.225:411/kehu/",
=======
<<<<<<< HEAD
			url: 'http://47.88.16.225:411/kehu/',
=======
			url: 'http://47.88.16.225:411/kehu/?{"shi":"客户"}',
>>>>>>> origin/master
>>>>>>> origin/master
			method: "get",
			data: {}
		}).then(function(data) {
			$scope.dataArr = data.data;
			$scope.tiaoo = data.data.length;
			$scope.arr = data.data;
			$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
		})
	var user = localStorage.user;
  	console.log(user);
  	$scope.pageNow=1;
  	$scope.page=5;
	$scope.totalPage=0;
	//遍历数组
	$scope.arr = [];
	
	$scope.xuezhe=function(){
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
	
	
    var arr1=[
            ['储备客户','潜在客户','成交客户','目标客户'],
            [''],
		        ['初期','中期','处理异议'],
		        ['个人客户','团队客户'],
		        ['已沟通','未沟通']
	];
	$('#ss').change(function(){
		var a=$('#ss').val();
		fn(a)
	})	
	
	//ww
	function fn(x){
		$('#cs').empty();
		for(var i=0;i<arr1[x-2].length;i++){
				$('#cs').append('<option value='+arr1[x-2][i]+' ng-click="show()">'+arr1[x-2][i]+'</option>')
		};
	}
	
	//查询
	$scope.show = function(e){
		alert(e);
	}
	
	$scope.btn=function(e){
		$scope.classes = angular.element(".yrkh_b_r_x").val();
		$scope.context = angular.element(".yrkh_b_r_g").val();
		if($scope.classes == 1){
			$scope.classes = "搜索";
		}else if($scope.classes == 2){
			$scope.classes = "jieduan";
		}else if($scope.classes == 3){
			$scope.classes = "xingming";
		}else if($scope.classes == 4){
			$scope.classes = "yingxiaojieduan";
		}else if($scope.classes == 5){
			$scope.classes = "leixing";
		}else if($scope.classes == 6){
			$scope.classes = "biaoqian";
		}
		var classes = $scope.classes;
		var context = $scope.context;
		$scope.objStr = '{"'+classes+'":"'+context+'"}';
		var objStr = $scope.objStr;
		$scope.obj = JSON.parse(objStr);
		$scope.arr = $filter("filter")($scope.dataArr, $scope.obj);
	}	
	
	//查
//		$http({
//			url: "http://47.88.16.225:411/kehu?tel=" + $scope.yrkneirong,
//			method: "get"
//		}).then(function(data) {
//			$scope.arr = data.data
//		})
	
//	var timers = null;
//	$scope.ofocus = function(){
//		timers = setInterval(function(){
//			if($scope.yrkneirong == ''){
//				$http({
//					url: "http://47.88.16.225:411/kehu/",
//					method: "get",
//					data: {}
//				}).then(function(data) {
//					$scope.tiaoo = data.data.length;
//					$scope.arr = data.data;
//					$scope.arr = $scope.arr.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
//					clearInterval(timers)
//				})
//			}
//		},500)
//	}
//	$scope.oblur = function(){
//		clearInterval(timers)
//	}
	
	
	
	
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
			$scope.xiugai=function(e){
			//获取id	
			$http({
				url:"http://47.88.16.225:411/kehu/"+e,
				method:"get",
				data:{}
			}).then(function(e){
				console.log(e)
				$scope.yrkdg=e.data;
			},function(){
				alert("请求失败")
			})			
			$scope.bbbb=true;
			//确认修改
			$scope.queren1=function(){
				$http({
					url:"http://47.88.16.225:411/kehu/"+e,
					method:"put",
					data:{
						"jieduan":$scope.yrkdg.jieduan,
						"suozaigongsi":$scope.yrkdg.suozaigongsi,
						"yingxiaojieduan":$scope.yrkdg.yingxiaojieduan,
						"leixing":$scope.yrkdg.leixing,
						"xingming":$scope.yrkdg.xingming,
						"xingbie":$scope.yrkdg.xingbie,
						"dianhua":$scope.yrkdg.dianhua,
						"zhixingren":$scope.yrkdg.zhixingren,
						"qq":$scope.yrkdg.qq,
						"email":$scope.yrkdg.email,
						"lianxiriqi":$scope.yrkdg.lianxiriqi,
						"shengri":$scope.yrkdg.shengri,
						"zhiwei":$scope.yrkdg.zhiwei,
						"duiyingkehu":$scope.yrkdg.duiyingkehu,
						"lianxineirong":$scope.yrkdg.lianxineirong,
						"lianxiren":$scope.yrkdg.lianxiren,
						"data":$scope.yrkdg.data,
						"biaoqian":$scope.yrkdg.biaoqian
					}
				}).then(function(data){
					window.location.reload();
				})
				$scope.bbbb=false;
			}
			
			}
			
			$scope.guan1=function(){
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
					if(!$scope.jieduan||!$scope.suozaigongsi||!$scope.yingxiaojieduan||!$scope.leixing||!$scope.xingbie||!$scope.xingming||!$scope.xingbie||!$scope.zhixingren||!$scope.qq||!$scope.email||!$scope.zhiwei||!$scope.lianxiren||!$scope.biaoqian){
						
						alert("请将信息填写完整");
					}else{
						
						alert("客户添加成功！");
						$http({
							url: "http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
							method: "post",
							data: {
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
								"lianxiriqi":$scope.lianxiriqi,
								"shengri":$scope.shengri,
								"zhiwei":$scope.zhiwei,
								"duiyingkehu":$scope.duiyingkehu,
								"lianxineirong":$scope.lianxineirong,
								"lianxiren":$scope.lianxiren,
								"data":$scope.data,
								"biaoqian":$scope.biaoqian
							}
						}).then(function(data) {
							window.location.reload()
						})
					}
					
					
					$scope.rise = false;
				}
		
	//正则
	  //性别验证
	  var xingbie=/^(男|女)$/;
	  $("#xingbie").blur(function(){
	  	if($(this).val().match(xingbie)){
	  		$(this).next().html('√').css("color", "green");
	  	}else{
	  		$(this).next().html('请输入正确格式').css("color", "red")
	  	}
	  })
		//手机验证
		var dianhua = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
		$("#dianhua").blur(function() {
			if($(this).val().match(dianhua)) {
				$(this).next().html('√').css("color", "green");
			} else {
				$(this).next().html('请输入正确格式').css("color", "red");
			}
		})
		
		//qq验证
		var qq = /^[1-9][0-9]{4,14}/;
		$("#qq").blur(function() {
			if($(this).val().match(qq)) {
				$(this).next().html('√').css("color", "green");
			} else {
				$(this).next().html('请输入正确格式').css("color", "red");
			}
		})
		
		//邮箱验证
		var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		$("#email").blur(function() {
			if($(this).val().match(email)) {
				$(this).next().html('√').css("color", "green");
			} else {
				$(this).next().html('请输入正确格式').css("color", "red");
			}
		})
		
	
	// 个人客户
	$scope.xuezhek=function(){
		$http({
			url:'http://47.88.16.225:411/kehu/?{"shi":"客户"}',
			method:"get",
			data:{}
		}).then(function(data){
			var cusArr = [];
			var data2 = data.data;
			for(var i=0; i<data2.length; i++){
				if(data2[i].zhixingren == user){
			      cusArr.push(data2[i]);
			    }
			}
			$scope.arr = cusArr;
			console.log($scope.arr);
		})
	}
	
	
	//放入公海
	$scope.gonghai = function(id, obj){
		alert("是否放入公海");
		$http({
			url:"http://47.88.16.225:411/kehu/" + id,
			method:"put",
			data: {
				"duiyingkehu": obj.duiyingkehu,
				"lianxineirong": obj.lianxineirong,
				"lianxiriqi":  obj.lianxiriqi,
				"lianxiren":  obj.lianxiren,
				"zhixingren":  "public",
				"tel": obj.tel
			}
		}).then(function(req){
//			console.log(req);
			window.location.reload();
		},function(){
			console.log("修改失败！");
		})
		
	}
	
	//分页
	$http({
		url:"http://47.88.16.225:411/kehu",
		method:"get"
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
	
//			$scope.prev=function(){
//			if($scope.pageNow<=1){
//			$scope.pageNow=1
//			}else{
//			$scope.pageNow--;
//			$http({
//			url: "http://47.88.16.225:411/kehu/",
//			method: "get",
//			data: {}
//			}).then(function(data) {
//			var cusArr = [];
//			var data2 = data.data;
//			for(var i=0; i<data2.length; i++){
//			if(data2[i].zhixingren == "public"){
//			      cusArr.push(data2[i]);
//			    }
//			}
//			$scope.pageNow=1;
//			$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
//			$scope.tiao = cusArr.length;
//			$scope.arr = cusArr;
//			$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
//			})
//			
//			}
//			
//			}
//			//下一页
//			$scope.next=function(){
//			if($scope.pageNow>=$scope.totalPage){
//			$scope.pageNow=$scope.totalPage
//			}else{
//			$scope.pageNow++;
//			$http({
//			url: "http://47.88.16.225:411/kehu/",
//			method: "get",
//			data: {}
//			}).then(function(data) {
//			var cusArr = [];
//			var data2 = data.data;
//			for(var i=0; i<data2.length; i++){
//			if(data2[i].zhixingren == "public"){
//			      cusArr.push(data2[i]);
//			    }
//			}
//			$scope.pageNow=1;
//			$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
//			$scope.tiao = cusArr.length;
//			$scope.arr = cusArr;
//			$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
//			})
//			
//			}
//			
//			}
	
  }]);
  