describe('attendeeDisplayName', function () {
    beforeEach(module('myApp.filters'));

    it('should combine attendee name and email', inject(function (attendeeDisplayNameFilter) {
        var attendee = {name: 'Henry', email: 'henry@abc.com'};

        var displayName = attendeeDisplayNameFilter(attendee);

        expect(displayName).toEqual("Henry(henry@abc.com)");
    }));

    it('should combine attendee name and email', inject(function ($filter) {
        var attendee = {name: 'Henry', email: 'henry@abc.com'};

        var displayName = $filter('attendeeDisplayName')(attendee);

        expect(displayName).toEqual("Henry(henry@abc.com)");
    }));
});