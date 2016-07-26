app.controller('AccountsController', ['$scope', '$http', 'moment', 'DTOptionsBuilder', '$location', function($scope, $http, moment, DTOptionsBuilder, $location) {
  console.log('AccountsController running');

  $scope.customers = [];  //"container" for the returned customer objects, which we'll use to populate customerTable
  $scope.currentCustomer = {};  //"container" for each new customer that is created

  getCustomers();

  $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);

  //function to create a new customer once data has been entered and "create" button is clicked
  $scope.submitCurrentCustomer = function() {
    var data = $scope.currentCustomer;
    $http.post('/accounts', data)
      .then(function() {
        console.log('POST /new customer account');
        getCustomers();
        //to clear form
        var $scc = $scope.currentCustomer;
        $scc.firstName = "";
        $scc.lastName = "";
        $scc.email = "";
        $scc.phone = "";
        $scc.address = "";
        $scc.event = "";
        $scc.eventDate = "";
        $scc.comments = "";
        $scope.customerForm.$setPristine();

    });
  }

  //function to get all customers from DB to populate the DOM
  function getCustomers() {
    $http.get('/accounts/customers').then(function(response) {
      response.data.forEach(function (customer) {
        customer.eventDate = moment.utc(customer.eventDate).format('MM-DD-YYYY');
      });
      console.log(response);
      $scope.customers = response.data;
    });
  }

  $scope.deleteCustomer = function (id) {
    console.log(id);
    $http.delete('/accounts/' + id)
      .then(function (response) {
        getCustomers();

      });
  };



}]);
