var myApp = angular.module('myApp');

myApp.controller('NGOsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('NGOsController loaded...');

	$scope.getNGOs = function(){
		$http.get('/api/ngos').success(function(response){
			console.log(response);
			$scope.ngos = response; 
		});
	}
  $scope.getNGO = function(){
		var id = $routeParams.id;
		
		$http.get('/api/ngos/'+id).success(function(response){
			$scope.ngo = response[0];
		});
		$http.get('/api/ngotasks/'+id).success(function(response2){
			$scope.tasks = response2;
		});
	}

	$scope.addNGO = function(){
		console.log($scope.ngo);
		$http.post('/api/ngos/', $scope.ngo).success(function(response){
			window.location.href='#/ngos';
		});
	}

	$scope.updateNGO = function(){
		var id = $routeParams.id;
		$http.put('/api/ngos/'+id, $scope.ngo).success(function(response){
			window.location.href='#/ngos';
		});
	}


	$scope.removeNGO = function(id){
		$http.delete('/api/ngos/'+id).success(function(response){
			window.location.href='#/ngos';
		});
	}
	$scope.addTask = function(){
		console.log($scope.task);
		$http.post('/api/tasks/', $scope.task).success(function(response){
			window.location.href='#/ngos/'+$scope.task.nid;
		});
	}

}]);