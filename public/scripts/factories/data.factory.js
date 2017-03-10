//PAUL'S CODE STARTS HERE


// PAUL'S CODE ENDS HERE

// CHAD'S CODE STARTS HERE


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
