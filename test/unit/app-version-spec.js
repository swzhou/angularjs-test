describe('appVersion', function () {

    beforeEach(module('myApp.directives'));

    it('should display app version', function () {
        module(function($provide){
            $provide.factory('app', function() {
                return {
                    version: 'test version'
                };
            });
        });

        inject(function($compile, $rootScope){
            var template = '<span app-version></span>';

            var element = $compile(template)($rootScope);

            expect(element.text()).toEqual('test version');
        });
    });
});