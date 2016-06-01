(function(){
    'use strict';
    angular.module('TestJasmine').controller('jasmineSampleController',jasmineSampleController);
    jasmineSampleController.$inject = ['$http' , 'jasmineService'];
    function jasmineSampleController($http , jasmineService){
        var vm = this;
        vm.sampleTest = sampleTest;
        vm.sampleNumber = sampleNumber;
        vm.httpCall = httpCall;
        vm.sampleAjaxCall = sampleAjaxcall;
        vm.sample = "";
        vm.bool = true;
        function init(){
            jasmineService.sampleAjaxCall().then(function(response){
                    vm.header = response.header;
                }
            );
        }
        function sampleAjaxcall(){
            jasmineService.sampleAjaxCall().then(function(response){
                    vm.header = response.header;
                }
            );
        }
        function sampleTest(){

            vm.sample = "This is Hello World test case!!!";
            vm.bool = false;
        }

        function sampleNumber(value){
            return value;
        }
        function httpCall(){
            $http.get('http://localhost:8082/resource/en.json')
                .then(function(response){
                    vm.header = response.data.header;
                });
        }
//init();
    }
})();
