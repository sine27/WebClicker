var angular = angular.module('index', []);

angular.controller('loginController', function ($scope, $http, $window) {
	userid = "";
    $scope.username = "";
	$scope.password = "";
    $scope.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                username: $scope.username,
                password: $scope.password
            })
        });
        $http.post("/local/login", data).success(function(data,status) {
            	//console.log("success");
            $window.alert("success "+ data);
            /**var userid = user._id;
            console.log(status + " Success login");
            // get user profile
            var dataProfile = $.param({
	            json: JSON.stringify({
	                username: $scope.username,
	                password: $scope.password
	            })
	        });*/
            $http.get("/profile", userid).success(function(err, profile) {
            	// set cookie
	            document.cookie = "userid=" + profile.userid + "; "
			                    + "fullname=" + profile.fullname + "; "
			                    + "email=" + profile.email + "; "
			                    + "usertype=" + profile.usertype ;
			    console.log(status + " Success load profile");
			    $location.path("/homepage.html")

            }).error(function(status) {
	        	console.log(status + " Fail load profile");
	        });

        }).error(function(status) {
        	console.log(status + " Fail login");
        });
    }                   
});

angular.controller('registerController', function ($scope, $http) {
	$scope.user = { 
		userid 		: "", 
		fullname	: "",
		email		: "",
		usertype	: "student"
	}
	$scope.fullname = "";
    $scope.username = "";
    $scope.email = "";
	$scope.password = "";
    $scope.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                username: $scope.username,
                password: $scope.password
            })
        });
        $http.post("/local/login", data).success(function(data, status) {
            $scope.user = data;
            console.log(status + " Success login");
            // set cookie
            document.cookie = "userid=" + $scope.user.userid + "; "
		                    + "fullname=" + $scope.user.fullname + "; "
		                    + "email=" + $scope.user.email + "; "
		                    + "usertype=" + $scope.user.usertype;

        }).error(function(status) {
        	console.log(status + " Fail login");
        });
    }                   
});

function getCookie(param) {
    var target = param + "=";
    var params = document.cookie.split(';');
    for(var i = 0; i < params.length; i++) {
        var current = params[i];
        while (current.charAt(0) == ' ') current = current.substring(1);
        if (current.indexOf(target) == 0) {
            return current.substring(target.length, current.length);
        }
    }
    return "";
}