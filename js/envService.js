angular.module('localPair')
	.service('envService', function ($window){
		return {
			getEnv: function() {
				return $window.env;
			}
		}
	})