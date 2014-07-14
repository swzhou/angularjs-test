'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('CoursesController', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/courses.json').success(function (courses) {
            $scope.currentCourses = courses;
        });

        $scope.register = function (attendee) {
            $scope.attendees = $scope.attendees || [];
            $scope.attendees.push(angular.copy(attendee));
        };
    }]);
