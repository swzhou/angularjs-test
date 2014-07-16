describe('appVersion', function(){

    beforeEach(module('myApp.directives'));

    it('should display correct app version', inject(function($compile, $rootScope){
        var template = '<span app-version></span>';

        var element = $compile(template)($rootScope);

        expect(element.text()).toEqual('1.0.0');
    }));
});