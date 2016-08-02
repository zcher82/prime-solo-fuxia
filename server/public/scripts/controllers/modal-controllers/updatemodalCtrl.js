app.controller('UpdateModalCtrl', ['$modalInstance', '$scope',
  function ($modalInstance, $scope) {

  $scope.newInfo = {};

  $scope.updateUserInfo = function () {
    var data = $scope.newInfo;
    $http.put('/userlanding/update')
      .then(function(response) {
        console.log('PUT', response);
      });
  }


  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
