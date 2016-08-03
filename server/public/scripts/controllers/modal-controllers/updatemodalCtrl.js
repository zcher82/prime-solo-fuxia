app.controller('UpdateModalCtrl', ['$modalInstance', '$scope', 'user', '$http',
  function ($modalInstance, $scope, user, $http) {

  $scope.user = user;
  $scope.newInfo = {};

  function closeModal() {
    $modalInstance.close();
  }

  $scope.updateUserInfo = function (id) {
    console.log(id);
    var data = $scope.newInfo;
    console.log(data);
    $http.put('/userlanding/update/' + id, data)
      .then(function(response) {
        console.log('PUT', response);
        $scope.newInfo = '';
        closeModal();
      });
  }

  // $scope.addImage = function (id) {
  //   var image = $scope.newImage;
  //   $http.put('/flowerdb/' + id + '/images', image)
  //     .then(function (response) {
  //       console.log('PUT /images ', image);
  //       getFlowers();
  //
  //       //clear input field
  //       $scope.newImage.image = "";
  //     });
  // };


  $scope.closeModal = function () {
    $modalInstance.close();
  };

}]);
