angular.module("appName").controller("sampleCtrl",["$scope",function($scope){
	$scope.String = "Hello World";
	$scope.testNumber = 12;
	$scope.testObject = {
		"firstName":"john",
		"lastName":"cena"
	}
	$scope.testSquare = function(){
		return Math.pow($scope.testNumber,2);
	}
	$scope.setFirstName = function(fname){
		$scope.testObject.firstName = fname;
	}

$scope.setLastName = function(lname){
		$scope.testObject.lastName = lname;
	}
	$scope.getFirstName = function(){
		return $scope.testObject.firstname;
	}
	$scope.getLastName = function(){
		return $scope.testObject.lastname;
	}
}])