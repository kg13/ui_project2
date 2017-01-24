"use strict";
angular.module("appName").controller("personCtrl",
["$scope","personService",function($scope,personService){
   //init();
      
   
   $scope.init=function(){
      personService.setFirstName("Barack");
      personService.setLastName("Obama");
      personService.setAddress("white house");
      personService.setPhone("911");
   }
   
   $scope.displayPerson=function(){
      console.log("From person ctrl");
      personService.testValues();
   }
   
}]);