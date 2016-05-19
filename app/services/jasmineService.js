(function(){
    'use strict';
    angular.module('TestJasmine')
        .factory('jasmineService' , jasmineService);
    jasmineService.$inject = ['$http', '$q'];
    function jasmineService($http,$q){
        return  jasmineService = {
            sampleAjaxCall: samplecall
        };
            function samplecall(){
                var deferred = $q.defer();
               $http.get('http://localhost:8082/resource/en.json').then(function(response) {
                       deferred.resolve(response.data);
                   },function(error){
                   deferred.reject();
               }
               );
                return deferred.promise;
        }
    }
})();