describe("first test case",function(){
   it("This should retirn a sum",function(){
     expect(2+3).toEqual(5);
   });
   it("should return true",function(){
   	 expect(true).toBeTruthy();
   });
   xit("Should expect a number",function(){
   	 expect("test").toBeNaN(true);
   });
});