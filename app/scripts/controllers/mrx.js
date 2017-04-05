'use strict';-

/**
 * @ngdoc function
 * @name lytappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lytappApp
 */
angular.module('lytappApp')
.controller('mrxCtrl',["$scope","$http","$filter",function ($scope,$http,$filter) {
	$scope.pageNow=1;
  	$scope.page=5;
	$scope.totalPage=0;	
	//$scope.aa=false;
//全选
	$scope.iCkeck=false;
	$scope.gb=false;	
	$scope.sc=false;
	$scope.checkAll=function(){
		//$scope.iCkeck=!$scope.iCkeck;  // 联动全选
		// 这里选择了全部客户，就把所有的客户的id存起来
		 

	}
	$scope.cli=function(aa,bb){
//		$scope.aa=!$scope.aa;   
         if(aa==true){
         	$scope.nowID=bb;
         	
         }
	}
//批量分配
	   	
		$scope.fp=function(){ 
			if($scope.nowID){
				 // 判断当前客户时候选择
				 $scope.gb=true;
			}else{
				$scope.zhez=true;
					$(".zhe").text("请先选择数据");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
			}
			
			
			
//			if(!$scope.iCkeck&&$scope.aa!=true){
//		 		// alert("请先选择数据");		 		 
//		 		 $scope.zhez=true;
//					$(".zhe").text("请先选择数据");
//					$scope.shanshan=function(){
//						$scope.zhez=false;
//				};
//		 		 
//		   }else{			
//				$scope.gb=true; 
//			}
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
			 $scope.zhez=true;
					$(".zhe").text("删除成功");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};		
			//alert("删除成功")
			location.reload();
		},function(){
			console.log("修改失败！");
		})
	 }
//查询	 
	 var arr1=[
            ['储备客户','潜在客户','成交客户','目标客户','商机客户'],
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
		$scope.classes = angular.element(".m_main_bottom-top-right_b_r_x").val();
		$scope.context = angular.element(".m_main_bottom-top-right_b_r_g").val();
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
	
	//编辑
			$scope.bbbb=false;
			$scope.xiugai=function(e){
			//获取id	
			$http({
				url:"http://47.88.16.225:411/kehu/"+e,
				method:"get",
				data:{}
			}).then(function(e){
				console.log(e)
				$scope.mrx=e.data;
			},function(){
				 $scope.zhez=true;
					$(".zhe").text("请求失败");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
				//alert("请求失败")
			})			
			$scope.bbbb=true;
			//确认修改
			$scope.queren1=function(){
				$http({
					url:"http://47.88.16.225:411/kehu/"+e,
					method:"put",
					data:{
						"jieduan":$scope.mrx.jieduan,
						"suozaigongsi":$scope.mrx.suozaigongsi,
						"yingxiaojieduan":$scope.mrx.yingxiaojieduan,
						"leixing":$scope.mrx.leixing,
						"xingming":$scope.mrx.xingming,
						"xingbie":$scope.mrx.xingbie,
						"dianhua":$scope.mrx.dianhua,
						"zhixingren":$scope.mrx.zhixingren,
						"qq":$scope.mrx.qq,
						"email":$scope.mrx.email,
						"lianxiriqi":$scope.mrx.lianxiriqi,
						"shengri":$scope.mrx.shengri,
						"zhiwei":$scope.mrx.zhiwei,
						"duiyingkehu":$scope.mrx.duiyingkehu,
						"lianxineirong":$scope.mrx.lianxineirong,
						"lianxiren":$scope.mrx.lianxiren,
						"data":$scope.mrx.data,
						"biaoqian":$scope.mrx.biaoqian
					}
				}).then(function(data){
					window.location.reload();
				})
				$scope.bbbb=false;
			}
			
			}
			
			$scope.guan=function(){
				$scope.bbbb=false;
			}	 
////获取列表
   	$http({
   		url:"http://47.88.16.225:411/kehu/",
   		method:"get"
   	}).then(function(data){
   		$scope.dataArr = data.data;
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
				$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
				$scope.tiao = cusArr.length;
				$scope.arr = cusArr;
				$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
				console.log($scope.arr);
			})			
		}		
	}
// 分配人员
$scope.sel=function(sele){
	$scope.nowBe=sele;
}

//保存
$scope.sels={};
   $scope.chu=function(){
   		$scope.gb=false;
   		// $scope.nowBe  这是分配给那个人的id
   		console.log($scope.nowBe,$scope.nowID);
     		$http({
			    url: "http://47.88.16.225:411/kehu/"+$scope.nowID,
			    method: "put",
			    data:{zhixingren:$scope.nowBe}
		       }).then(function(data) {
			          console.log(data)
		     })

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
			 $scope.zhez=true;
//					$(".zhe").text("success");
//					$scope.shanshan=function(){
//						$scope.zhez=false;
//				};
			alert("success");        
			location.reload();
		},function(){
			console.log("修改失败！");
		})
	}
   
   //手机验证
		var dianhua = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
		$("#dianhua").blur(function() {
			if($(this).val().match(dianhua)) {
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
   
}]);
