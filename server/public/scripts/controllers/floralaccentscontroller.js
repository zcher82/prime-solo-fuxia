app.controller('FloralAccentsController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
  console.log('FloralAccentsController running');

  $scope.accents = [];
  $scope.greens = [];

  getAccents();
  getGreens();

  function getAccents() {
    $http.get('/accents')
      .then(function(response){
        console.log('my', response);
        $scope.accents = response.data;
      });
  }

  function getGreens() {
    $http.get('/accents/green')
      .then(function(response){
        console.log(response);
        $scope.greens = response.data;
      });
  }


  $scope.displayAccentsModal = function(id) {
    var correctAccent
    var a = $scope.accents;
    var b = $scope.greens;
    var allAccents = a.concat(b);
    console.log('1st', id);
    console.log('mainCtrl', allAccents);
    angular.forEach(allAccents, function (accent) {
      if (id === accent._id) {
        correctAccent = accent
      }
    });
    var modalInstance = $modal.open({
      templateUrl: '../views/templates/accentsModalView.html',
      controller: 'AccentsModalCtrl',
      resolve: {
        correctAccent: function() {
          return correctAccent;
        }
      }
    });
  };


  /*$scope.displayAccentsModal = function(id) {
    var correctAccent = {};
    var correctGreen = {};
    console.log('1st', id);
    angular.forEach($scope.accents, function (accent) {
      if (id === accent._id) {
        console.log(accent);
        correctAccent = accent;
        console.log(correctAccent);
      }
    });
    angular.forEach($scope.greens, function (green) {
      if (id === green._id) {
        correctGreen = green;
      }
    });
    var modalInstance = $modal.open({
      templateUrl: '../views/templates/accentsModalView.html',
      controller: 'AccentsModalCtrl',
      resolve: {
        correctAccent: function() {
          return correctAccent;
        },
        correctGreen: function() {
          return correctGreen;
        }
      }
    });
  };*/


}]);
