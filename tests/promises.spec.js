//Tests the XHR calls we make by mocking the HTTP response using $httpBackend service

describe('Testing the Promises in Angular' , function(){
    var $controller, $http, jasmineService, $httpBackend;
    beforeEach(module('TestJasmine'));
    beforeEach(inject(function(_$controller_ , _$http_ , _jasmineService_,_$httpBackend_){
        $controller = _$controller_;
        $http = _$http_;
        jasmineService = _jasmineService_;
        $httpBackend = _$httpBackend_;
        ctrl = $controller('jasmineSampleController' , {$controller:$controller , $http:$http , jasmineService:jasmineService});
    }));
    it('Should give resolve promise' , function(){
        $httpBackend.when('GET' , 'http://localhost:8082/resource/en.json')
            .respond(200 , {header : "Rogers Preferred Pricing Admin" });
        ctrl.httpCall();
        $httpBackend.flush();
        expect(ctrl.header).toEqual('Rogers Preferred Pricing Admin');
    });
});