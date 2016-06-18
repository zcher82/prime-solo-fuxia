app.controller('AccentsModalCtrl', ['$modalInstance', '$scope', 'correctAccent',
  function ($modalInstance, $scope, correctAccent) {
    $scope.correctAccent = correctAccent;

    console.log('modal', $scope.correctAccent);

  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
