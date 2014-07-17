describe('Navigation', function() {
    beforeEach(function(){
        browser.get('index.html');
    });

    it('should navigate to /courses when location hash is empty', function(){
        expect(browser.getCurrentUrl()).toContain('#/courses');
    });
});