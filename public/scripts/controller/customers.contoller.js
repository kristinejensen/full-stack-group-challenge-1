warehouseApp.controller('CustomerController', ['DataFactory', function(DataFactory){
console.log('The customer controller was loaded');
var self = this;

self.customerList = DataFactory.customerList;
//on the DOM, this will display as cc.customerList

}]);
