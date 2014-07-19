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

    it('should allow register to a course', function(){
        browser.navigate('#/courses');

        var registrationForm = element(by.tagName('form'));
        var name = registrationForm.element(by.model('newAttendee.name'));
        var email = registrationForm.element(by.model('newAttendee.email'));
        var course = registrationForm.element(by.model('newAttendee.course'));
        var date = registrationForm.element(by.model('newAttendee.date'));
        var registerBtn = registrationForm.element(by.buttonText('Register'));
        name.sendKeys('shiwei');
        email.sendKeys('shiwei@abc.com');
        course.sendKeys('javascript');
        date.sendKeys('2014/08/05');
        registerBtn.click();

        var coursesTable = element(by.tagName('table'));
        var rowsFinder = by.repeater('course in currentCourses');
        var courseJavascript = coursesTable.element.all(rowsFinder).get(0);
        expect(courseJavascript.getText()).toContain('shiwei(shiwei@abc.com) registered at 2014/08/05');
    });
});