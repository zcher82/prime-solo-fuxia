app.controller('FlowerdbController', ['$scope', '$http', function($scope, $http) {
  console.log('FlowerdbController running');

  $scope.flowers = [];
  $scope.currentFlower = {};
  $scope.newImage = {};
  $scope.displayedFlowerId = '';

  getFlowers();

  function getFlowers() {
    $http.get('/flowerdb')
      .then(function (response) {
        $scope.flowers = response.data;
        console.log('GET /flowers ', response.data);

      });
  }

  $scope.submitCurrentFlower = function () {
    var data = $scope.currentFlower;
    $http.post('/flowerdb', data)
      .then(function () {
        console.log('POST /flower');
        getFlowers();
        //clear input fields
        var $scc = $scope.currentFlower;
        $scc.name = "";
        $scc.description = "";
        $scc.symbolism = "";
        $scc.colorMeaning = "";
        // $scope.flowerForm.$setPristine();
      });
  };

  $scope.deleteFlower = function (id) {
    console.log(id);
    $http.delete('/flowerdb/' + id)
      .then(function (response) {
        getFlowers();

      });
  };

  $scope.imgShowInput = function (id) {
    $scope.displayedFlowerId = id;
  }


  //adding new image to DB
  $scope.addImage = function (id) {
    var image = $scope.newImage;
    $http.put('/flowerdb/' + id + '/images', image)
      .then(function (response) {
        console.log('PUT /images ', image);
        getFlowers();

        //clear input field
        $scope.newImage.image = "";
        // $scope.addImgForm.$setPristine();
      });
  };

}]);
