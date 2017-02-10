describe ("Specs for Sample controller",function(){
	beforeEach(angular.mock.module('appName'));
	var $controller;
	var $scope;
 
	beforeEach(angular.mock.inject(function(_$controller_,$rootscope){
		$controller =_$controller_;
		$scope=$rootscope.$new();
		var controller = $controller('sampleCtrl',{
			$scope: $scope
		});
		console.log("hello");
}));


  it("has a testString",function(){
  	expect($scope.testString).toBeDefined();
  	
  });
  it("has a testString with value 'Hello World'",function(){
  	expect($scope.testString).toEqual("Hello World");
  });

  it("has a testNumber",function(){
  	expect($scope.testNumber).toBeDefined();
  	expect($scope.testNumber).toEqual(12);

});
  it("has a testObject", function(){
  	expect($scope.testObject).toBeDefined();
  });
  it("has firstName property inside testObject",function(){
  	expect($scope.testObject.firstName).toBeDefined();
  });
  it("has lastName property inside testObject",function(){
  	expect($scope.testObject.lastName).toBeDefined();
  });

  it("has firstName value inside testObject",function(){
  	expect($scope.testObject.firstName).toEqual("john");
  });

  it("has lastName value inside testObject",function(){
  	expect($scope.testObject.lastName).toEqual("cena");
  });
  it("has testSquare function",function(){
  	expect($scope.testSquare()).toEqual(144);
  });

  describe("Test for the setter and getter method",function(){
  	beforeEach(function(){
  		$scope.setFirstName("Micheal");
  		$scope.setLastName("jaction");
  		console.log("Test")

  	})
  	it("has setFirstName function",function(){
  		expect($scope.setFirstName).toBeDefined();
  	});
  	it("should update firstName in testObject",function(){
  		expect($scope.testObject.firstName).toEqual("Micheal");
  	});
  	it("should update lastName in testObject",function(){
  		expect($scope.testObject.lastName).toEqual("Jackson");
  	});
  	it("should return first and last name",function(){
  		expect($scope.getFirstName()).toEqual("Micheal");
  		expect($scope.getLastName()).toEqual("Jackson");
  	});

  
  })

});