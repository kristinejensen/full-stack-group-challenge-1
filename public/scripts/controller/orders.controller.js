warehouseApp.controller('OrdersController', ['DataFactory', function(DataFactory){
  console.log('The OrdersController was loaded');
  var self = this;

  self.ordersList = DataFactory.ordersList;
  self.testMessage = 'sup?';

}]); // end of orders.controller function (end of this file)
