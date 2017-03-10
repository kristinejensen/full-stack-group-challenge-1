var warehouseApp = angular.module('WarehouseApp', ['ngRoute']);
<<<<<<< HEAD
console.log('WarehouseApp is running');
=======

>>>>>>> dev
warehouseApp.config(['$routeProvider', function($routeProvider){
  $routeProvider

    .when('/warehouse', {
      templateUrl: 'views/warehouse-view.html',
      controller: 'WarehouseController',
      controllerAs: 'wc'
    })

    .when('/customers', {
      templateUrl: 'views/customer-view.html',
      controller: 'CustomersController',
      controllerAs: 'cc'
    })

    .when('/orders', {
      templateUrl: 'views/orders-view.html',
      controller: 'OrdersController',
      controllerAs: 'oc'
    })

    .otherwise({
      redirectTo: 'warehouse'
    });
}]);
