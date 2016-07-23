app.controller('UserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {

  $scope.userInfo = {};

  getUser();

  function getUser() {
    $http.get('/user')
      .then(function(response) {
        if(response.data.username) {
            $scope.userInfo = response.data;
            console.log('GET user', $scope.userInfo);
        } else {
            $location.path("/home");
        }
    });
  }

  $scope.logout = function() {
    $http.get('/user/logout')
      .then(function(response) {
        console.log('logged out');
        $location.path("/home");
    });
  }


}]);
