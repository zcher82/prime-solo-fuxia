app.controller('FloralAccentsController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
  console.log('FloralAccentsController running');

  $scope.accents = [];
  $scope.greens = [];

  getAccents();
  getGreens();

  //GET accent flowers from database
  function getAccents() {
    $http.get('/accents')
      .then(function(response){
        console.log('my', response);
        $scope.accents = response.data;
      });
  }

  //Get greens from database
  function getGreens() {
    $http.get('/accents/green')
      .then(function(response){
        console.log(response);
        $scope.greens = response.data;
      });
  }

  //MODAL display function, called when picture of image is clicked on
  $scope.displayAccentsModal = function(id) {
    var correctAccent
    var a = $scope.accents;
    var b = $scope.greens;
    var allAccents = a.concat(b);
    console.log('1st', id);
    console.log('mainCtrl', allAccents);
    angular.forEach(allAccents, function (accent) {
      if (id === accent._id) {
        correctAccent = accent;
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

}]);
