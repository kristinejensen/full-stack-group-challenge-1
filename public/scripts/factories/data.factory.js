warehouseApp.factory('DataFactory',['$http', function($http) {

//PAUL'S CODE STARTS HERE
var ordersList = { list: [] };
getOrders();

  function getOrders() {
    $http({
      method: 'GET',
      url: '/routes/orders'
    }).then(function(response) {
      console.log('response from factory',  response); //response is object, .data is array
      console.log('response.data from facotry', response.data); //long array
      ordersList.list = response.data; //factoryTasks is object with list proprty that is array from database
    });
  }




return  {
  ordersList: ordersList // this is object
};


// PAUL'S CODE ENDS HERE

// CHAD'S CODE STARTS HERE


//CHAD'S CODE ENDS HERE

// KRIS'S CODE STARTS HERE


// KRIS'S CODE ENDS HERE






}]); // end of TaskFactory function (end of this file)
