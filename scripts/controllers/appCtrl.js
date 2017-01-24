angular.module("appName").controller("appCtrl",["$scope","personService","personFactory",function($scope,personService){
   $scope.title = "Hello World";
   $scope.forModal="Abc";
   $scope.change = function(){
      $scope.title="check your spellings";
   
      
   }
    $scope.init=function(){
      personService.setFirstName("Donald");
      personService.setLastName("Trump");
      personService.setAddress("white house");
      personService.setPhone("911");
   }
   
   $scope.displayPerson=function(){
      console.log("From app ctrl")
      personService.testValues();
   }
      $scope.init=function(){
      personFactory.setFirstName("abc");
      personFactory.setLastName("xyz");
      personFactory.setAddress("dfhsdfhs");
      personFactory.setPhone("23423");
   }

}]);