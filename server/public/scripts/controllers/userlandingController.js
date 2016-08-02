app.controller('UserlandingController', ['$scope', '$http', '$window', '$location', '$modal', function($scope, $http, $window, $location, $modal) {

  $scope.user = {};

  getUser();


  function getUser() {
    $http.get('/userlanding')
      .then(function(response) {
        if(response.data.username) {
            $scope.user = response.data;
            console.log('GET user', $scope.user);
        } else {
            $location.path("/home");
        }
    });
  }

  $scope.updateInfo = function(id) {
    var modalInstance = $modal.open({
      templateUrl: '../views/templates/updateModalView.html',
      controller: 'UpdateModalCtrl',

    });
  }

  $scope.logout = function() {
    $http.get('/userlanding/logout')
      .then(function(response) {
        console.log('logged out');
        $location.path("/home");
    });
  }


}]);
