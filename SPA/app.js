//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);
//Define Routing for the application
sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Customers/AddNewCustomer', {
                templateUrl: 'Customers/AddNewCustomer.html',
                controller: 'AddNewCustomerController'
            }).
            when('/Customers/CustomerInquiry', {
                templateUrl: 'Customers/CustomerInquiry.html',
                controller: 'CustomerInquiryController'
            }).
            otherwise({
                redirectTo: '/Customers/AddNewCustomer'
            });
}]);