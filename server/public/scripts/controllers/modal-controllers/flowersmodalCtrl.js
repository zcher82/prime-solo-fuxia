app.controller('ModalCtrl', ['$modalInstance', '$scope', 'correctFlower',
  function ($modalInstance, $scope, correctFlower) {
    $scope.correctFlower = correctFlower;

    console.log('modal', correctFlower);
  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
