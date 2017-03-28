var mshotelApp = angular.module('mshotelApp', [
    'ngRoute',
    'mshotelControllers',
]);

mshotelApp.config(function ($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/functions', {
            templateUrl: 'partials/functions.html',
            controller: 'FunctionsCtrl'
        })
        .when('/docs', {
            templateUrl: 'partials/docs.html',
            controller: 'DocsCtrl'
        })
        .when('/demo', {
            templateUrl: 'partials/demo.html',
            controller: 'DemoCtrl'
        })
        .when('/sale', {
            templateUrl: 'partials/sale.html',
            controller: 'SaleCtrl'
        })
        .when('/contacts', {
            templateUrl: 'partials/contacts.html',
            controller: 'ContactsCtrl'
        })
        .otherwise({
            redirectTo: '/about'
        });
});
