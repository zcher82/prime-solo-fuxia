app.controller('ModalCtrl', ['$modalInstance', '$scope', 'correctFlower',
  function ($modalInstance, $scope, correctFlower) {

    $scope.correctFlower = correctFlower;


    console.log('modal', correctFlower);
  $scope.closeModal = function () {
    $modalInstance.close();
  };

  $scope.addToBasket() = function(id) {
    console.log(user._id);
    $http.put('/flowers').then(function(response) {
      console.log('PUT', response);
    });
  }

}]);
