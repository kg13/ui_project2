angular.module("appName").controller("contactListCtrl",
["$scope","personHttp",function($scope,personHttp){
  refreshEntries();

   $scope.contactList = [];
   
   $scope.formModels = {
      firstName:"",
      lastName:"",
      address:"",
      phoneNumber:"",
      email:""
   };

   $scope.delete=function(contactId){
      personHttp.deletePersonList(contactId);
      refreshEntries();
   };
   $scope.update=function(contactId){
    alert("update"+contactId);
   };

   $scope.add = function(){
      var tempObj = { 
       firstName:$scope.forModels.firstName,
       lastName:$scope.forModels.lastName,
       address:$scope.forModels.address,
       phone:$scope.forModels.phone,
       email:$scope.forModels.email
    };
      personHttp.postPersonList(tempObj).then(function(response){
        alert("Successfully added");
        refreshEntries();
      })
   };

   function refreshEntries(){
      var promise=personHttp.getPersonList();
          promise.then(function(response){
          $scope.contactList = response;
    
   });
 }
   
   // var person1 = {
   //    firstName:"sdf",
   //    lastName:"sdfsd",
   //    address:"eve",
   //    phone:"43433",
   // };
   
   // var person2 = {
   //    firstName:"aaa",
   //    lastName:"fbf",
   //    address:"xxz",
   //    phone:"1111",
   // };
   
   // var person3 = {
   //    firstName:"lll",
   //    lastName:"dddd",
   //    address:"312dfdf",
   //    phone:"565656",
   // };
   
   // $scope.contactList.push(person1);
   // $scope.contactList.push(person2);
   // $scope.contactList.push(person3);
   
   
}]);