// Shows the difference in usage of toEqual() and toBe() matchers(Go through the matchers section in jasmine before you dive into this)

// toEqual() works as lenient equality which in javascript is represented as ==(just checks if the values are equal , doesnt bother whether they are same or not)

// toBe() works as strict equality which in javascript is represented as === (checks for the identity , sameness)

describe("Testing the difference between the usage of toBe and toEqual" , function(){
    var $controller;
    beforeEach(module('TestJasmine'));
    it("Should pass for primitives" , function(){
        var first = 1;
        var second = 1;
        expect(first).toEqual(1);
        expect(second).toEqual(1);
        expect(first).toEqual(second);
        expect(first).toBe(1);
        expect(second).toBe(1);
        expect(first).toBe(second);
    });
    it("toEqual Should pass for Objects and Arrays" , function(){
        var first = {a : 1 , b : 2};
        var second = {a : 1 , b : 2};
        var third = [1,2];
        var fourth = [1,2];
        expect(first).toEqual({a : 1 , b : 2});
        expect(second).toEqual({a : 1 , b : 2});
        expect(first).toEqual(second);
        expect(third).toEqual([1,2]);
        expect(fourth).toEqual([1,2]);
        expect(third).toEqual(fourth);
    });
    it("toBe Should fail for Objects and Arrays" , function(){
        var first = {a : 1 , b : 2};
        var second = {a : 1 , b : 2};
        var third = [1,2];
        var fourth = [1,2];
        expect(first).not.toBe({a : 1 , b : 2});
        expect(second).not.toBe({a : 1 , b : 2});
        expect(first).not.toBe(second);
        expect(third).not.toBe([1,2]);
        expect(fourth).not.toBe([1,2]);
        expect(third).not.toBe(fourth);
    });
});