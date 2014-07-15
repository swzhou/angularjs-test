'use strict';


// Declare app level module w
// hich depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/courses', {templateUrl: 'partials/courses.html', controller: 'CoursesController'});
        $routeProvider.otherwise({redirectTo: '/courses'});
    }]);
