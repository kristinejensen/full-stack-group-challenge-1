<<<<<<< HEAD
warehouseApp.factory('DataFactory',['$http', function($http) {
=======
warehouseApp.factory('DataFactory', ['$http', function($http) {

var warehouseList = { list: [] };
>>>>>>> dev

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
getWarehouses();

function getWarehouses() {
  $http({
    method: 'GET',
    url: '/warehouse'
  }).then(function(response) {
    console.log(response.data);
    warehouseList.list = response.data;
  });
}

//CHAD'S CODE ENDS HERE

// KRIS'S CODE STARTS HERE
var customerList = {list: []};

getCustomers();

function getCustomers(){}
  $http({
    method: 'GET',
    url: '/customers'
  }).then(function(response){
    console.log('response.data from factory: ', response.data);
    customerList.list = response.data;
  });
}

return{
  customerList: customerList
  warehouseList: warehouseList
};

// KRIS'S CODE ENDS HERE

<<<<<<< HEAD





}]); // end of TaskFactory function (end of this file)
=======
}]);
>>>>>>> dev
