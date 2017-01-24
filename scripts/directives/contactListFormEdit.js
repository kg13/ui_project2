"use strict";
angular.module("appName").directive("contactListUpdate",["personHttp",function(personHttp){
   return{
      restrict:"EAMC",
      scope:{
      	updateid:"="
      },
      controller:function($scope){
      	$scope.forModels={
      		firstName:"",
      		lastName:"",
      		address:"",
      		email:"",
      		phoneNumber:""
      	};

      },
      templateUrl:"/views/contactListForm.html",
      link:function(scope,element,attr){
      	
      			if (newVal=0) {
      			var prom=personHttp.getpersonListUniq(newVal).then(function(res){
      				scope.forModels = data[0];

      			})
      		}
      		})

      		// console.log("Displaying attribute");
      		// console.log(attr.updateid);
      		// console.log(attr.class);
      		// console.log(attr.id);

      		// alert(attr.updateid);


      }
      
   }
}]);