describe('Courses', function () {
    beforeEach(function () {
        browser.get('index.html');
    });

    it('should render courses table when user navigate to #/courses', function () {
        browser.navigate('#/courses');

        var coursesTable = element(by.tagName('table'));
        var rowsFinder = by.repeater('course in currentCourses');
        var courses = coursesTable.element.all(rowsFinder);
        expect(courses.count()).toBe(3);

        var courseNames = coursesTable.element.all(rowsFinder.column('{{course.name}}'));
        expect(courseNames.get(0).getText()).toBe('javascript');
        expect(courseNames.get(1).getText()).toBe('c#');
        expect(courseNames.get(2).getText()).toBe('powershell');
    });
});