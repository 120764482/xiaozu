
		angular.module('lytappApp')
	.controller('wxaddCtrl', ["$scope","$http",function($scope,$http) {
	
        $scope.rise = false;
		$scope.add = function() {
			$scope.rise = true;
		}

		$scope.del = function() {
			$scope.rise = false;
		}
		
		
		
		$scope.bianji = false;
		$scope.bjis=function(e,b){
			$scope.bianji = true;
			$scope.i=b;
			$scope.abc=e;
		}
		
		
		
		$scope.dell = function() {
			$scope.bianji = false;
		}
		
		
		 $scope.iCkeck = false;
	     $scope.checkall = false;
		  $scope.checkAll = function(){
		  	if($scope.checkall){
		  		$scope.iCkeck = true;
		  	}else{
		  		$scope.iCkeck = false;
		  	}
		  }
		  
		  
		
		  
		  
arry=[]

   $scope.baocun=function(){
  
	$http({
   url:"http://47.88.16.225:411/kehu/?uid=" + localStorage.uid,
   	method:"post",
   	data:{
   		"duiyingkehu":$scope.kehu,
   		"data":$scope.dataa,   		
   		"reirong":$scope.nei,
   		"chuangjianren":$scope.ren
   		
   	}
   	
   }).then(function(data) {
				window.location.reload()
			})
$scope.rise = false;

}
       $http({
				url:"http://47.88.16.225:411/kehu/",
				method:"get",
				data: {}
			}).then(function(data) {
				$scope.arry=data.data
			})
		

//    $scope.deldel=function(index){
//					$scope.arry.splice(index,1);
//				} 
//		 

		
		$scope.deldel= function(a,$index) {
			$http({
				url:"http://47.88.16.225:411/kehu/" + a,
				method: "delete"

			}).then(function(data) {
				alert("删除成功")
				$scope.arry.splice($index,1);
				
			})
		}

		
		
		
		
		
		
		
		
			}]);

			
	
	