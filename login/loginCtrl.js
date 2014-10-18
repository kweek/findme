var app = angular.module('localPair');

app.controller('loginCtrl', function($scope, authService, $location){
	
$scope.logIn = function() {
	if($scope.showLogin === true) {
		$scope.showLogin = false;
	} else {
		$scope.showLogin = true;
		
	}
	 $scope.user = '';
}

$scope.signUp = function() {
	if($scope.showSignup === true) {
		$scope.showSignup = false;
	} else {
		$scope.showSignup = true;
		
	}
	$scope.newUser = '';
}

$scope.loginUser = function() {
	authService.loginUser($scope.user, function(user) {
	user.uid = user.uid.replace("simplelogin:", '')
	$scope.$apply(function(){
		$location.path("/home/" + user.uid)

	});
	});
}

$scope.signupUser = function() {
 authService.signupUser($scope.newUser, function(user){
 	user.uid = user.uid.replace("simplelogin:", '')
 	$scope.$apply(function(){
 		$location.path("/home/" + user.uid)
 	})
 });
  
}
})



