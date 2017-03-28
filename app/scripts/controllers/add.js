angular.module('lytappApp')
	.controller('wxaddCtrl', ["$scope", "$http", function($scope, $http) {

		$scope.rise = false;
		$scope.add = function() {
			$scope.rise = true;
		}

		$scope.del = function() {
			$scope.rise = false;
		}

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
				alert("获取信息失败！");
			})
			$scope.bianji = true;

			$scope.bc = function() {
			if( $scope.cusMsg.duiyingkehu==""||$scope.cusMsg.data==""||$scope.cusMsg.reirong==""||$scope.cusMsg.chuangjianren=="")	{
				alert("请填写修改信息")
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
					window.location.reload()
				})
				}
				$scope.bianji = false;
			}
		}

		$scope.dell = function() {
			$scope.bianji = false;
		}

		$scope.iCkeck = false;
		$scope.checkall = false;
		$scope.checkAll = function() {
			if($scope.checkall) {
				$scope.iCkeck = true;
			} else {
				$scope.iCkeck = false;
			}
		}

		$scope.arry = [];
	
	

		$scope.baocun = function(){
			if(!$scope.kehu||!$scope.dataa||!$scope.nei||!$scope.ren) {
				alert("请填写修改信息")
			} else {
				$http({
					url: "http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
					method: "post",
					data: {
						"duiyingkehu": $scope.kehu,
						"data": $scope.dataa,
						"reirong": $scope.nei,
						"chuangjianren": $scope.ren
					}

				}).then(function(data) {
					window.location.reload()
				})
			}
			
			$scope.rise = false;

		}

		$http({
			url: "http://47.88.16.225:411/kehu/",
			method: "get",
			data: {}
		}).then(function(data) {
			$scope.arry = data.data
		})





		$scope.deldel = function(a, $index) {
			console.log(a)
			$http({
				url: "http://47.88.16.225:411/kehu/" + a,
				method: "delete",
			}).then(function(data) {
				console.log(data)
				alert("删除成功")
				$scope.arry.splice($index, 1);

			})
		}

		$http({
			url: "http://47.88.16.225:411/kehu/",
			method: "get",
			data: {}
		}).then(function(data) {
			$scope.tiaoshu = data.data.length;
			$scope.arry = data.data;
			$scope.arry = $scope.arry.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
		})

		$http({
			url: "http://47.88.16.225:411/kehu",
			type: "get"

		}).then(function(req) {
			$scope.totalPage = Math.ceil(req.data.length / $scope.page);
		}, function() {
			console.log("请求失败");
		})

		$scope.prev = function() {
			if($scope.pageNow <= 1) {
				$scope.pageNow = 1
			} else {
				$scope.pageNow--;
				$http({
					url: "http://47.88.16.225:411/kehu/",
					method: "get",
					data: {}
				}).then(function(data) {
					$scope.tiaoshu = data.data.length;
					$scope.arry = data.data;
					$scope.arry = $scope.arry.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
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
					$scope.tiaoshu = data.data.length;
					$scope.arry = data.data;
					$scope.arry = $scope.arry.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
				})

			}

		}

		//		$scope.prev=function(){
		//		if($scope.pageNow<=1){
		//			$scope.pageNow=1
		//		}else{
		//			$scope.pageNow--;
		//			$http({
		//				url: "http://47.88.16.225:411/kehu/",
		//				method: "get",
		//				data: {}
		//			}).then(function(data) {
		//				var cusArr = [];
		//				var data2 = data.data;
		//				for(var i=0; i<data2.length; i++){
		//					if(data2[i].zhixingren == "public"){
		//				      cusArr.push(data2[i]);
		//				    }
		//				}
		//				$scope.pageNow=1;
		//				$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
		//				$scope.tiao = cusArr.length;
		//				$scope.arr = cusArr;
		//				$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
		//			})
		//			
		//		}
		//		
		//	}
		////下一页
		//		$scope.next=function(){
		//		if($scope.pageNow>=$scope.totalPage){
		//			$scope.pageNow=$scope.totalPage
		//		}else{
		//			$scope.pageNow++;
		//			$http({
		//				url: "http://47.88.16.225:411/kehu/",
		//				method: "get",
		//				data: {}
		//			}).then(function(data) {
		//				var cusArr = [];
		//				var data2 = data.data;
		//				for(var i=0; i<data2.length; i++){
		//					if(data2[i].zhixingren == "public"){
		//				      cusArr.push(data2[i]);
		//				    }
		//				}
		//				$scope.pageNow=1;
		//				$scope.totalPage=Math.ceil(cusArr.length/$scope.page);
		//				$scope.tiao = cusArr.length;
		//				$scope.arr = cusArr;
		//				$scope.arr=$scope.arr.slice(($scope.pageNow-1)*$scope.page,$scope.pageNow*$scope.page);
		//			})
		//			
		//		}
		//		
		//	}
		
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
				alert("获取信息失败！");
			})
			$scope.xiangqing = true;

		
    }
		
			$scope.xxxx = function() {
			$scope.xiangqing = false;
		}

		
		
	}]);