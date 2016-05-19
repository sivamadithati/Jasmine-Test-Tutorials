(function(){
    'use strict';
    angular.module('TestJasmine')
        .directive('sampleDirective' ,jasmineSampleDirective );
    function jasmineSampleDirective(){
        return {
            restrict : 'E',
            template : '<h1>This is a Test Jasmine directive</h1>'
        }
    }
})();