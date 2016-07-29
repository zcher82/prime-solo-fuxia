app.controller('UpdateModalCtrl', ['$modalInstance', '$scope',
  function ($modalInstance, $scope) {


  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
