var app = angular.module('localPair');

app.service('chatService', function($firebase, envService, $http) {
	var url = envService.getEnv().firebase;

	var chatroom = $firebase(new Firebase(url + '/chatroom')).$asArray();

	this.getChats = function() {
		return chatroom;
	}
	
});