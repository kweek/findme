var app = angular.module('localPair', ['ngRoute', 'firebase', 'google-maps']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'login/loginView.html',
			controller: 'loginCtrl'
		})
		.when('/home/:userId', {
			templateUrl: 'home/home.html',
			controller: 'homeCtrl', 
			resolve: {
				userReference: function(firebaseService, $route){
					return firebaseService.getUser($route.current.params.userId);
				}		
			}})
		.otherwise({
			rediretTo: '/'
		})
})