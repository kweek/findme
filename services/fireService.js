var app = angular.module('localPair');

app.service('firebaseService', function ($firebase, envService) {
	var firebaseUrl = envService.getEnv().firebase;

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + '/users/' + userId)).$asObject();
	};

	this.getThings = function(userId){
		return $firebase(new Firebase(firebaseUrl + '/users/' + userId + '/things')).$asArray();	
	}
})