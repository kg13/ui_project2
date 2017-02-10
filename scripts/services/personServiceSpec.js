describe ("Specs for Sample person service :",function(){
	beforeEach(angular.mock.module('appName'));
	var personService;
	
	beforeEach(angular.mock.inject(function(_personService_){
		personService=_personService_;
	}));
	it("should set the value firstname",function(){
		personService.setFirstName("cat");
		expect(personService.getFirstName()).toEqual("cat");
	});
	it("should set the value lastname",function(){
		personService.setLastName("cat");
		expect(personService.getLastName()).toEqual("dog");
	});
	it("should set the value of address",function(){
		personService.setAddress("");
		expect(personService.getAddress()).toEqual("");
	});
});