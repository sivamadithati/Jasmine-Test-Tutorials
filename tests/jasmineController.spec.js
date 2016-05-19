// Writing jasmine test case to test simple Hello, World!!
// Placing spyOn on some method , doesnt access the implementation inside. It just monitors over the call , arguments. It is like


describe("Testing Hellow world", function(){ // SUITE
    var $controller, $http, jasmineService;
    beforeEach(module('TestJasmine'));
    beforeEach(inject(function(_$controller_ , _$http_ , _jasmineService_){
        $controller = _$controller_;
        $http = _$http_;
        jasmineService = _jasmineService_;
        ctrl = $controller('jasmineSampleController' , {$controller:$controller , $http:$http , jasmineService:jasmineService});
    }));
    it("Says Hello" , function(){   //SPEC
        spyOn(ctrl,'sampleTest').and.callThrough();
        ctrl.sampleTest();
        expect(ctrl.sampleTest).toBeDefined();
        expect(ctrl.sampleTest).toHaveBeenCalled();
        expect(ctrl.sample).toEqual("This is Hello World test case!!!");
        expect(ctrl.bool).toBeFalsy();
    });
   /* it("Says Hello" , function(){   //SPEC
        spyOn(ctrl,'sampleTest');
        ctrl.sampleTest();
        expect(ctrl.sampleTest).toBeDefined();
        expect(ctrl.sampleTest).toHaveBeenCalled();
        expect(ctrl.sample).toEqual("This is Hello World test case!!!");
        expect(ctrl.bool).toBeFalsy();
    });*/
});