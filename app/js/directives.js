'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['app', function (app) {
        return function (scope, element, attr) {
            app.get().then(function (response) {
                var appConfig = response.data;
                element.text(appConfig.version);
            });
        };
    }])
    .directive('date', function () {
        return {
            replace: true,
            template: '<input type="text"/>',
            restrict: 'E',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                element.bind('change input keyup', function () {
                    scope.$apply(setModelValue);
                });

                function setModelValue() {
                    ngModel.$setViewValue(element.val());
                }

                setModelValue();

                ngModel.$parsers.push(function (value) {
                    var isValid = value.match(/[0-9]{2}-[0-9]{2}-[0-9]{2}$/);
                    ngModel.$setValidity('date', isValid);
                    if (isValid) {
                        return value;
                    }
                });
            }
        };
    });