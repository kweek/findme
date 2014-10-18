var app = angular.module('localPair');

app.controller('homeCtrl', function($scope, userReference, chatService, authService) {
   

   $scope.profile = userReference;
$scope.map = {
    center: {
        latitude: 39,
        longitude: -98
    },
    zoom: 5,
    control: {}
};
        
        $scope.error = "";
        $scope.myMarkers = [];
 
        $scope.showPosition = function (position) {
        	console.log(position)
            $scope.map.control.refresh({latitude: position.coords.latitude, longitude: position.coords.longitude})
            $scope.map.zoom = 15;
            $scope.userMarker = [{
            	id: 1,
            	latitude: position.coords.latitude,
            	longitude: position.coords.longitude
            }]
            $scope.$apply();
 
            //var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
            //$scope.model.myMap.setCenter(latlng);
            //$scope.myMarkers.push(new google.maps.Marker({ map: $scope.model.myMap, position: latlng }));
        }
 
        $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        }
 
        $scope.getLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
            }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        }
 
        $scope.getLocation();

//chat controller info here. 
		$scope.chats = chatService.getChats();

		$scope.postChats = function(){
			$scope.chat.postedBy = $scope.profile.name;
			$scope.chats.$add($scope.chat);
			$scope.chat = '';
		}

	


})