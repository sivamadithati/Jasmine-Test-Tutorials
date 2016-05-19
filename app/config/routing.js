(function(){
    angular.module('TestJasmine')
        .config(['$urlRouterProvider,$stateProvider', function($urlRouterProvider,$stateProvider) {
            $urlRouterProvider.otherwise({redirectTo: '/jasmine'});
            $stateProvider.state({
                name:'sample',
                url:'/jasmine',
                controller : 'jasmineSampleController',
                controllerAs : 'vm',
                templateUrl : 'app/views/jasmine.html'
            });
        }]);
})();