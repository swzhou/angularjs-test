'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    factory('app', ['$http', function ($http) {
        return {
            version: '1.0.1'
        }
    }]);
