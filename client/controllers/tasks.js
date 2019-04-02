var myApp = angular.module('myApp');

myApp.controller('TasksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TasksController loaded...');

	$scope.getTasks = function(){
		$http.get('/api/tasks').success(function(response){
			$scope.tasks = response;
		});
	}
	$scope.getTask = function(){
		var id = $routeParams.id;
		
		$http.get('/api/tasks/'+id).success(function(response){
			$scope.task = response[0];
			console.log(response)
		});
	}

	$scope.addTask = function(){
		console.log($scope.task);
		$http.post('/api/tasks/', $scope.task).success(function(response){
			window.location.href='#/tasks';
		});
	}

	$scope.updateTask = function(){
		var id = $routeParams.id;
		$http.put('/api/tasks/'+id, $scope.task).success(function(response){
			window.location.href='#/tasks';
		});
	}

	$scope.removeTask = function(id){
		$http.delete('/api/tasks/'+id).success(function(response){
			window.location.href='#/tasks';
		});
	}
	
}]);