app.controller('UserlandingController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {

  $scope.user = {};
  $scope.userInfoNew = {};

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

  $scope.updateInfo = function() {

  }

  $scope.logout = function() {
    $http.get('/userlanding/logout')
      .then(function(response) {
        console.log('logged out');
        $location.path("/home");
    });
  }


}]);
