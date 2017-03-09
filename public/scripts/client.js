var myApp = angular.module('WarehouseApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider


    .when('/warehouse', {
      templateUrl: 'views/warehouse-view.html',
      controller: 'warehouseController',
      controllerAs: 'wc'
    })

    .when('/customers', {
      templateUrl: 'views/customer-view.html',
      controller: 'customersController',
      controllerAs: 'cc'
    })

    .when('/orders', {
      templateUrl: 'views/orders-view.html',
      controller: 'ordersController',
      controllerAs: 'oc'
    })

    .otherwise({
      redirectTo: 'warehouse'
    })
}]);
