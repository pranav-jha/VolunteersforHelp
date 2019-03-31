var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'NGOsController',
		templateUrl: 'views/ngos.html'
	})
	.when('/ngos/details/:id',{
		controller:'NGOsController',
		templateUrl: 'views/ngo_details.html'
	})
	

	.when('/tasks', {
		controller:'TasksController',
		templateUrl: 'views/tasks.html'
	})
	
	.when('/tasks/add',{
		controller:'TasksController',
		templateUrl: 'views/add_task.html'
	})
	.when('/ngos', {
		controller:'NGOsController',
		templateUrl: 'views/ngos.html'
	})
	.when('/ngo/add',{
		controller:'NGOsController',
		templateUrl: 'views/add_ngo.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});