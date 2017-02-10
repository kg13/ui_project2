angular.module("appName").service("personHttp",["$http",function($http){
   this.personList =[];
   var that = this;
   this.getPersonList = function(){
      return $http({
         method:"GET",
         url:"/serivice/contactinfo"
      }).then(function(result){
         that.personList = result.data;
         return result.data
      });
   };
   this.getPersonList = function(dataParam){
      return $http({
         method:"POST",
         url:"/serivice/contactinfo",
         data:dataParam
      }).then(function(result){
         return result.status;
      });
   }

   this.deletePersonList = function(dataParam){
      return $http({
         method:"DELETE",
         url:"/serivice/contactinfo",
         data:dataParam
      }).then(function(result){
         return result.status;
      });
   }

   this.updatePersonList=function(dataParam){
      return $Http({
         method:"PUT",
         url:"service/contactinfo/"+contactid,
         data:dataParam
      }).then(function(result){
         return result.status;
      });
   }
}]);