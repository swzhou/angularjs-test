'use strict';

describe('health', function () {

    browser.get('index.html');

    it('should get the page', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/courses");
        expect(element.all(by.css('#footer')).first().getText()).toMatch(/My Courses/);
    });
});
