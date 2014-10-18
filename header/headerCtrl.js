var app = angular.module('localPair');

app.controller('headerCtrl', function($scope, authService) {

	$scope.logoutUser = function() {
			authService.logout();

		}


	});