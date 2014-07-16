describe('CoursesController', function () {
    var scope, courses = [
        {
            "name": "javascript",
            "online": "2014/07/30"
        },
        {
            "name": "c#",
            "online": "2014/08/15"
        },
        {
            "name": "powershell",
            "online": "2014/08/30"
        }
    ];

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function ($controller, $httpBackend, $rootScope) {
        scope = $rootScope.$new();
        $httpBackend.whenGET(/courses/).respond(courses);
        $controller('CoursesController', {
            $scope: scope
        });
        $httpBackend.flush();
    }));

    it('should populate current courses after initialization', function () {
        expect(scope.currentCourses).toEqual(courses);
    });

    it('should register to a new course given attendee information', function () {
        var newAttendee = {name: 'new attendee', course: 'c#'};

        scope.register(newAttendee);

        expect(scope.attendees.length).toEqual(1);
        expect(scope.attendees[0]).toEqual(newAttendee);
    });
});