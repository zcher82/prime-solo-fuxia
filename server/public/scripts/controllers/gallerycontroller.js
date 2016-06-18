app.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
  console.log('GalleryController running');

  $scope.arrowPrevious = "arrowPrevious";
  $scope.arrowNext = "arrowNext";
  $scope.arrangements = [];
  getArrangements();


  function getArrangements() {
    $http.get('/galleryinput')
      .then(function (response) {
        $scope.arrangements = response.data;
        console.log($scope.arrangements);
      });
  }

  // initial image index
  $scope._Index = 0;

  // if a current image is the same as requested image
  $scope.isActive = function (index) {
      return $scope._Index === index;
  };

  // show prev image
  $scope.showPrev = function () {
      $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.arrangements.length - 1;
  };

  // show next image
  $scope.showNext = function () {
      $scope._Index = ($scope._Index < $scope.arrangements.length - 1) ? ++$scope._Index : 0;
  };

  // show a certain image
  $scope.showArrangement = function (index) {
      $scope._Index = index;
  };


}]);
