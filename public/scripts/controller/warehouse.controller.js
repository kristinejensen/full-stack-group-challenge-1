warehouseApp.controller('WarehouseController', ['DataFactory', function(DataFactory){
  console.log('The WarehouseController was loaded');
  var self = this;
  self.warehouseList = DataFactory.warehouseList;
}]);
