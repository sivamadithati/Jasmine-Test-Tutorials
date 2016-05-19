// Tests the directives with inline template as well as template loaded externally using templateURL

//First suite tests the inline template

//Second suite tests the externally loaded template using 'karma-ng-html2js-preprocessor' plugin(recommended in Angular website)

describe('Testing the directive' , function(){
    describe("Inline template" , function(){
        var $compile,$rootScope;
        beforeEach(module('TestJasmine'));
        beforeEach(inject(function(_$compile_ , _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            element = angular.element('<sample-directive></sample-directive>');
            elem = $compile(element)($rootScope)
        }));
        it('Should contain the text "This is a Test jasmine directive"' , function(){
            expect(elem[0].children[0].innerHTML).toEqual("This is a Test Jasmine directive");
        });
    });
    describe("With External template" , function(){
        var $compile,$rootScope;
        beforeEach(module('TestJasmine'));
        beforeEach(module('app/views/jasmineDirective.html'));
        beforeEach(inject(function(_$compile_ , _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            element = angular.element('<template-directive></template-directive>');
            elem = $compile(element)($rootScope);
            $rootScope.$digest();
        }));
        it("Should have the sample-directive in the rendered template" , function(){
            //expect(elem.find('sample-directive').length).toEqual(1);
            expect(elem.find('sample-directive').length).toEqual(1);
            expect(elem[0].children[0].innerHTML).toEqual("This is the External Template which will be loaded into the directive");
        } );
    });
});