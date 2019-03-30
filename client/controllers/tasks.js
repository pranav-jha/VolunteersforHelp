var myApp = angular.module('myApp');

myApp.controller('TasksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TasksController loaded...');

	$scope.getTasks = function(){
		$http.get('/api/tasks').success(function(response){
			$scope.tasks = response;
		});
	}

	
}]);