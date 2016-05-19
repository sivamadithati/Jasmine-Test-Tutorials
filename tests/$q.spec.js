// Tests the scenarios where we return the promises using the $q inbuilt service

// First test spec makes use of Angulars inbuilt $q to resolve the promise

//Second test spec makes use of Jquerys way of resolving the promise

describe('Test to resolve promise objects' , function(){
    var $controller, $http, jasmineService,$q,$scope;
    beforeEach(module('TestJasmine'));
    beforeEach(inject(function(_$controller_ , _$http_ , _jasmineService_ , _$q_,_$rootScope_){
        $controller = _$controller_;
        $http = _$http_;
        jasmineService = _jasmineService_;
        $q = _$q_;
        $scope = _$rootScope_.$new();
        ctrl = $controller('jasmineSampleController' , {$controller:$controller , $http:$http , jasmineService:jasmineService});
    }));
    it('Should resolve the promise with some data' , function(){
        spyOn(jasmineService , 'sampleAjaxCall').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve({header : "Rogers Preferred Pricing Admin" });
            return deferred.promise;
        });
        ctrl.sampleAjaxCall();
        $scope.$apply();
        expect(ctrl.header).toEqual('Rogers Preferred Pricing Admin');
    });
    it('Should resolve the promise with some data with Jquery' , function(){
        spyOn(jasmineService , 'sampleAjaxCall').and.callFake(function(){
            var deferred = $.Deferred();
            deferred.resolve({header : "Rogers Preferred Pricing Admin" });
            return deferred.promise();
        });
        ctrl.sampleAjaxCall();
        $scope.$apply();
        expect(ctrl.header).toEqual('Rogers Preferred Pricing Admin');
    });
});