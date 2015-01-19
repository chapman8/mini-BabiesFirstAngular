var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

	$scope.friends = ['Mike', 'Mark', 'Marie', 'Mom', 'Dad'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend)
		$scope.newFriend = '';
	}

})


