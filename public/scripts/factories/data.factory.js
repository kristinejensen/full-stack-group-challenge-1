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


// KRIS'S CODE ENDS HERE
return {
    warehouseList: warehouseList
  };

}]);
