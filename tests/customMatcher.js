// Tests the functionality with the custom matcher created apart from the regular matchers provided by jasmine

// This custom matcher "toBePositive()" checks if the input is a positive value

describe("Testing Custom matcher" , function(){
    var $controller, $http, jasmineService;
    beforeEach(module('TestJasmine'));
    beforeEach(inject(function(_$controller_ , _$http_ , _jasmineService_){
        $controller = _$controller_;
        $http = _$http_;
        jasmineService = _jasmineService_;
        ctrl = $controller('jasmineSampleController' , {$controller:$controller , $http:$http , jasmineService:jasmineService});
    }));
    beforeEach(function(){
        jasmine.addMatchers({
            toBePositive : function(util , customEqualityTesters) {
                return {
                    compare: function (actual, expected) {
                        if (expected == undefined){
                            expected = "";
                        }
                        var result = {};
                        result.pass = actual > 0;
                        if(result.pass){
                            result.message = "Expected behaviour achieved"
                        }else{
                            result.message = "Expected the value to be positive"
                        }
                        return result;
                    }

                };
            }
        });
    });
    it('Should pass the test' , function(){
        expect(ctrl.sampleNumber(6)).toBePositive();
    });
    it('Should fail the test' , function(){
        expect(ctrl.sampleNumber(-6)).not.toBePositive();
    });
});