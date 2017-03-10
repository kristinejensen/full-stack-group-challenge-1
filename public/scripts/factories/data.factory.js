warehouseApp.factory('DataFactory', ['$http', function($http) {

    var warehouseList = {
        list: []
    };
    var customerList = {
        list: []
    };
    var ordersList = {
        list: []
    };

    getOrders();

    function getOrders() {
        $http({
            method: 'GET',
            url: '/routes/orders'
        }).then(function(response) {
            console.log('response from factory', response); //response is object, .data is array
            console.log('response.data from facotry', response.data); //long array
            ordersList.list = response.data; //factoryTasks is object with list proprty that is array from database
        });
    }

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

    getCustomers();

    function getCustomers() {
        $http({
            method: 'GET',
            url: '/customers'
        }).then(function(response) {
            console.log('response.data from factory: ', response.data);
            customerList.list = response.data;
        });
    }

    return {
        ordersList: ordersList,
        customerList: customerList,
        warehouseList: warehouseList
    };

}]); // end of TaskFactory function (end of this file)
