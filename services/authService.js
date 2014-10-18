var app = angular.module('localPair');

app.service('authService', function($firebase, envService, $http, $location) {
 	var url = envService.getEnv().firebase;
 	var ref = new Firebase(url);

 	this.loginUser = function(user, cb) {
 		ref.authWithPassword({
			email    : user.email,    //Email and Password come from our login form 
			password : user.password
		}, function(err, authData) {
			if (err) {
				console.log('error')
				switch (err.code) {
					case "INVALID_EMAIL": // handle an invalid email 
			        
			        case "INVALID_PASSWORD":  // handle an invalid password
			        default:
			    }
			} else if (authData) { // user authenticated with Firebase 
				console.log(authData)
			    console.log("Logged In! User ID: " + authData.uid);
			    cb(authData); //gives the authenticated user to our callback
			}
		});
	}

 	this.signupUser = function(user, cb) {
 		ref.createUser({
 			email: user.email,
 			password: user.password
 		},
 			function(error) {
 				if(error === null) {
 					console.log('yay! It worked');
	 				ref.authWithPassword({
							email    : user.email,
							password : user.password
						}, function(err, authData) {
					  if (authData) {
					  		authData.name = user.name;
					  		authData.timestamp = new Date().toISOString();
					    ref.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
					    cb(authData);
	 				
	 				} else {
	 					console.log('oh no!' + error)
 				}
 			}
 		)
 	}

})
}
//this should log you out, connected to your headerCtrl 
 	this.logout = function() {
 		ref.unauth();
 		$location.path('/')
 	}
})




