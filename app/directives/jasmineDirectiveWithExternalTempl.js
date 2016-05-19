(function(){
    'use strict';
    angular.module('TestJasmine')
        .directive('templateDirective' ,templateDirective );
    function templateDirective(){
        return {
            restrict : 'E',
            templateUrl : 'app/views/jasmineDirective.html'
        }
    }
})();