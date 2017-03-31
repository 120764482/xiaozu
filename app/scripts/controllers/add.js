angular.module('lytappApp')
	.controller('wxaddCtrl', ["$scope", "$http", function($scope, $http) {

 $scope.pageNow=1;
  	$scope.page=5;
	$scope.totalPage=0;

//请求数据

	$scope.jishiben="记事本";
		$http({
				url: 'http://47.88.16.225:411/kehu/?{"shi":"记事本"}',
			method: "get",
			data: {}
		}).then(function(data) {
			$scope.arry = data.data
		})
		
		
		
		
		$scope.rise = false;
		$scope.add = function() {
			$scope.rise = true;
		}

		$scope.del = function() {
			$scope.rise = false;
		}

//编辑
		$scope.bianji = false;
		$scope.bjis = function(e, b) {
			$http({
				url: "http://47.88.16.225:411/kehu/" + e,
				method: "get",
				data: {}
			}).then(function(e) {
				console.log(e);
				$scope.cusMsg = e.data;
			}, function() {
//				alert("获取信息失败！");
				$scope.zhez=true;
					$(".zhe").text("获取信息失败！")
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
			})
			$scope.bianji = true;

			$scope.bc = function() {
			if( $scope.cusMsg.duiyingkehu==""||$scope.cusMsg.data==""||$scope.cusMsg.reirong==""||$scope.cusMsg.chuangjianren=="")	{
//				alert("请填写修改信息")
				$scope.zhez=true;
					$(".zhe").text("请填写修改信息");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
			}else{
				
				$http({
					url: "http://47.88.16.225:411/kehu/" + e,
					method: "put",
					data: {
						"duiyingkehu": $scope.cusMsg.duiyingkehu,
						"data": $scope.cusMsg.data,
						"reirong": $scope.cusMsg.reirong,
						"chuangjianren": $scope.cusMsg.chuangjianren
					}

				}).then(function(data) {
					$scope.zhez=true;
					$(".zhe").text("修改成功");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
					//alert("修改成功")
					window.location.reload()
				})
				}
				$scope.bianji = false;
			}
		}

		$scope.dell = function() {
			$scope.bianji = false;
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

		
	
	


//删除


		$scope.deldel = function(a, $index) {
			console.log(a)
			$http({
				url: "http://47.88.16.225:411/kehu/" + a,
				method: "delete",
			}).then(function(data) {
				console.log(data)
				
				$scope.zhez=true;
			$(".zhe").text("删除成功")
			$scope.shanshan=function(){
						$scope.zhez=false;
				};
				$scope.arry.splice($index, 1);

			})
		}







		//详情
		
			$scope.xiangqing = false;
		$scope.xiqing = function(d, b) {
			$http({
				url: "http://47.88.16.225:411/kehu/" + d,
				method: "get",
				data: {}
			}).then(function(d) {
				console.log(d);
				$scope.xiqi = d.data;
			}, function() {
			
				$scope.zhez=true;
				$(".zhe").text("获取信息失败！");
				$scope.shanshan=function(){
						$scope.zhez=false;
				};
				
			})
			$scope.xiangqing = true;

		
    }
		
			$scope.xxxx = function() {
			$scope.xiangqing = false;
		}

		
		
		
		
		
		//保存
		$scope.baocun = function(){
			if(!$scope.kehu||!$scope.dataa||!$scope.nei||!$scope.ren) {
				$scope.zhez=true;
					$(".zhe").text("添加内容为空");
					$scope.shanshan=function(){
						$scope.zhez=false;
					}
//				alert("添加内容为空")
			} else {
				$http({
					url: "http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
					method: "post",
					data: {
						"duiyingkehu": $scope.kehu,
						"data": $scope.dataa,
						"reirong": $scope.nei,
						"chuangjianren": $scope.ren,
						"shi":$scope.jishiben
					}

				}).then(function(data) {
					$scope.zhez=true;
					$(".zhe").text("添加成功");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
					window.location.reload()
				})
			}
			
			$scope.rise = false;

		}


		
		
//		$http({
//			url: "http://47.88.16.225:411/kehu/",
//			method: "get",
//			data: {}
//		}).then(function(data) {
//			$scope.tiaoshu = data.data.length;
//			$scope.arry = data.data;
//			$scope.arry = $scope.arry.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
//		})
		
	
		
		
		//$scope.arry = [];
		
		
		//分页

		$http({
		url: 'http://47.88.16.225:411/kehu/?{"shi":"记事本"}',
		method: "get",
				data: {}
	}).then(function(req){
			$scope.tiaoshu = req.data.length;
		$scope.totalPage=Math.ceil(req.data.length/$scope.page);
	},function(){
		//console.log("请求失败");
	
		$scope.zhez=true;
					$(".zhe").text("请求失败");
					$scope.shanshan=function(){
						$scope.zhez=false;
				};
		
		
		
	})
	
	$scope.prev=function(){
		if($scope.pageNow<=1){
			$scope.pageNow=1
		}else{
			$scope.pageNow--;
			$http({
				url: 'http://47.88.16.225:411/kehu/?{"shi":"记事本"}',
				method: "get",
				data: {}
			}).then(function(data) {
				$scope.tiaoshu = data.data.length;
				$scope.arry = data.data;
				$scope.arry=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
			})
			
		}
		
	}
	$scope.next=function(){
		if($scope.pageNow>=$scope.totalPage){
			$scope.pageNow=$scope.totalPage
		}else{
			$scope.pageNow++;
			$http({
				url: 'http://47.88.16.225:411/kehu/?{"shi":"记事本"}',
				method: "get",
				data: {}
			}).then(function(data) {
				$scope.tiaoshu = data.data.length;
				$scope.arry = data.data;
				$scope.arry=$scope.arry.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
			})
			
		}
		
	}
		
		
		
		
		
		
		
		
		
		
	}]);