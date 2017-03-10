warehouseApp.factory('DataFactory', ['$http', function($http) {

var warehouseList = { list: [] };

//PAUL'S CODE STARTS HERE


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
}
// response.data is an array of objects

// KRIS'S CODE ENDS HERE
return {
    warehouseList: warehouseList
  };

}]);
