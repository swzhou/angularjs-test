describe('appService', function () {
    beforeEach(module('myApp.services'));

    it('should get correct app version', inject(function ($httpBackend, app) {
        $httpBackend.whenGET('data/app.json').respond({
            version: 'any'
        });

        var promise = app.get();

        promise.then(function (response) {
            expect(response.data.version).toEqual('any');
        });
        $httpBackend.flush();
    }));
});