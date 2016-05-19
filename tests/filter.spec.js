//Tests the filter using the $filter service provided by angular.

//This filter 'tel' , will format the mobile number . Ex 4161111111 ----> (416) 111-1111

describe("Testing filter" , function(){
    var $filter;
    beforeEach(module('TestJasmine'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
        filter = $filter('tel');
    }));
    it("Should format the mobile number" , function(){
        expect(filter(4161111111)).toEqual("(416) 111-1111");
    });
    it("Should truncate the number to 10 digits" , function(){
        expect(filter(416111111111111111)).toEqual("(416) 111-1111");
    });
});