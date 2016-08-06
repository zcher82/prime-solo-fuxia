app.controller('ModalCtrl', ['$modalInstance', '$scope', '$http', 'correctFlower', 'userData', '$location',
  function ($modalInstance, $scope, $http, correctFlower, userData, $location) {

    $scope.correctFlower = correctFlower;
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


    // console.log('modal', correctFlower);
  $scope.closeModal = function () {
    $modalInstance.close();
  };

  $scope.addToBasket = function(id) {
    var userId = $scope.user._id;
    console.log(id);
    console.log(userId);
    $http.put('/flowers/' + id, userId)
      .then(function(response) {
      console.log('PUT', response);
    });
  }

}]);
