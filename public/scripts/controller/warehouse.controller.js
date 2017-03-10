myApp.controller('WarehouseController', ['$http', 'DataFactory', function($http, DataFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = TaskFactory.allTasks;
