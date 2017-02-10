describe ("Unit Test for sample Directive",function(){
	beforeEach(angular.mock.module('appName'));
	var element;
	var scope;
 
	beforeEach(angular.mock.inject(function($rootscope,_$compile_){
		element = angular.element("<sample-dir></sample-dir>");
    scope = $rootScope.$new();
    _$compile_(element)(scope);
    scope.$digest();
		
}));


  it("Should have a table",function(){
  	expect(element.find("h1").html()).toEqual("Hello World");
  	
  });
})
  

 












