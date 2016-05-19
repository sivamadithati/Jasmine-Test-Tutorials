// It takes the class or type of the data it is handling to assert
describe('Testing Jasmine any matcher' , function(){
    var $controller, $http, jasmineService;
    beforeEach(module('TestJasmine'));
    beforeEach(inject(function(_$controller_ , _$http_ , _jasmineService_){
        $controller = _$controller_;
        $http = _$http_;
        jasmineService = _jasmineService_;
        ctrl = $controller('jasmineSampleController' , {$controller:$controller , $http:$http , jasmineService:jasmineService});
    }));
    it("Sent a  Number",function(){
        expect(ctrl.sampleNumber(6)).toEqual(jasmine.any(Number));
    });
    it("Sent a String",function(){
        expect(ctrl.sampleNumber(" Test String")).toEqual(jasmine.any(String));
    });
    it("Sent an Object",function(){
        expect(ctrl.sampleNumber({test : 'test object'})).toEqual(jasmine.any(Object));
    });
});