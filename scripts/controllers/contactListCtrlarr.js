angular.module("appName").controller("contactListCtrl",
["$scope","personFactory",function($scope,personFactory){
   
   $scope.contactList = [];
   
   $scope.formModels = {
      firstName:"",
      lastName:"",
      address:"",
      phone:""
   };
   $scope.update = function(){
//      var tempObj = { 
//       firstName:$scope.forModels.firstName,
//       lastName:$scope.forModels.lastName,
//       address:$scope.forModels.address,
//       phone:$scope.forModels.phone
//    };
      $scope.contactList.push($scope.formModels);
   };
   
   var person1 = {
      firstName:"sdf",
      lastName:"sdfsd",
      address:"eve",
      phone:"43433",
   };
   
   var person2 = {
      firstName:"aaa",
      lastName:"fbf",
      address:"xxz",
      phone:"1111",
   };
   
   var person3 = {
      firstName:"lll",
      lastName:"dddd",
      address:"312dfdf",
      phone:"565656",
   };
   
   $scope.contactList.push(person1);
   $scope.contactList.push(person2);
   $scope.contactList.push(person3);
   
   
}]);