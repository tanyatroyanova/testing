describe("Assertions tests", function() {
    it("сравнение двух чисел", function() {
      let a = 1;
      let b = 1;
      expeсt(a).toBe(a);
      expect(a).toEqual(b);      
    });
  
    it("сравнение двух строк на полное совпадение", function() {
      expeсt('abc').toMatch('abc');     
    });
  
    it("сравнение двух строк на частичное совпадени(содержит)", function() {
      expeсt('aaaabcrefgweg').toContain('abc');     
    });
  
    it("сравнение массивов", function() {
      let arr1 = [1, 2, 3];
      let arr2 = [1, 2, 3];
      expeсt(arr1).toEqual(arr2);   
    });
  });
  