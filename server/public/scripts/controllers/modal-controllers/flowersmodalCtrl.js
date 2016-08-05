app.controller('ModalCtrl', ['$modalInstance', '$scope', '$http', 'correctFlower', 'userData',
  function ($modalInstance, $scope, $http, correctFlower, userData) {

    var user = {};
    userData.getUser();
    $scope.correctFlower = correctFlower;
    console.log(user);


    // console.log('modal', correctFlower);
  $scope.closeModal = function () {
    $modalInstance.close();
  };

  $scope.addToBasket = function(id) {
    console.log(id);
    $http.put('/flowers')
      .then(function(response) {
      console.log('PUT', response);
    });
  }

}]);
