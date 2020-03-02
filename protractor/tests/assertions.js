describe("Assertions tests", function() {
    it("сравнение двух чисел", function() {
      let a = 1;
      let b = 1;
      expect(a).toBe(b);
      expect(a).toEqual(b);      
    });
  
    it("сравнение двух строк на полное совпадение", function() {
      expect('abc').toEqual('abc');     
    });
  
    it("сравнение двух строк на частичное совпадение(содержит)", function() {
      expect('aaaabcrefgweg').toContain('abc');     
    });
  
    it("сравнение массивов", function() {
      let arr1 = [1, 2, 3];
      let arr2 = [1, 2, 3];
      expect(arr1).toEqual(arr2);   
    });
  });
  