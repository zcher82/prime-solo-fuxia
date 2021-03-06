app.controller('HomeController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  console.log('HomeController running');

  $scope.user = {
    username: '',
    password: ''
  };
  $scope.message = '';

  $scope.login = function() {
    if($scope.user.username == '' || $scope.user.password == '') {
      $scope.message = "Enter your username and password!";
    } else {
      console.log('sending to server...', $scope.user);
      $http.post('/', $scope.user).then(function(response) {
        if(response.data.username) {
          console.log('success: ', response.data);
          // location works with SPA (ng-route)
          $location.path('/userlanding');
        } else {
          console.log('failure: ', response);
          $scope.message = "Wrong!!";
        }
      });
    }
  }

  $scope.registerUser = function() {
    if($scope.user.username == '' || $scope.user.password == '') {
      $scope.message = "Choose a username and password!";
    } else {
      console.log('sending to server...', $scope.user);
      $http.post('/register', $scope.user).then(function(response) {
        console.log('success');
        $location.path('/home');
      },
      function(response) {
        console.log('error');
        $scope.message = "Please try again."
      });
    }
  }

}]);
