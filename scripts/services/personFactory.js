"use strict";
angular.module("appName").factory("personFactory",function(){
   var firstName, lastName, address, phone;
   var _this = this;
   return{
      setFirstName:function(fName){
         _this.firstName = fName;
      },
      setLastName:function(lName){
         _this.lastName = lName;
      },
      setAddress:function(add){
         _this.address = add;
      },
      setPhone:function(ph){
         _this.phone = ph;
      },
      
      getFirstName:function(fName){
         return _this.firstName = fName;
      },
      
      getLastName:function(fName){
         return _this.lastName = lName;
      },
      getAddress:function(add){
         return _this.address = add;
      },
      getPhone:function(ph){
         return _this.phone = ph;
      },
      testValues:function(){
         console.log("From Factory")
         console.log(_this.firstName);
         console.log(_this.lastName);
         console.log(_this.address);
         console.log(_this.phone);
      }
   }
});