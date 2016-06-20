app.controller('GalleryInputController', ['$scope', '$http', function($scope, $http) {
  console.log('GalleryInputController running');

  $scope.newArrangement = {};
  $scope.arrangments = [];

  $scope.newAccent = {};
  $scope.accents = [];

  $scope.newGreen = {};
  $scope.greens = [];

  getArrangements();
  getAccents();
  getGreens();

//*************** Arrangement functions **************

  $scope.addArrangement = function () {
    var data = $scope.newArrangement;
    $http.post('/galleryinput', data)
      .then(function () {
        console.log('POST /arrangement');
        getArrangements();
        //clear input fields
        var $scc = $scope.newArrangement;
        $scc.image = "";
        $scc.description = "";
      });
  };

  function getArrangements() {
    $http.get('/galleryinput')
      .then(function (response) {
        $scope.arrangements = response.data;
        console.log($scope.arrangements);
      });
  }

  $scope.deleteArrangement = function (id) {
    console.log(id);
    $http.delete('/galleryinput/' + id)
      .then(function (response) {
        getArrangements();

      });
  };

//***************** Accents functions ********************

  $scope.addAccent = function () {
    var data = $scope.newAccent;
    console.log(data);
    $http.post('/galleryinput/accent', data)
      .then(function () {
        console.log('POST /accent');
        getAccents();
        //clear input fields
        var $scc = $scope.newAccent;
        $scc.name = "";
        $scc.image = "";
      });
  };

  function getAccents() {
    $http.get('/accents')
      .then(function (response) {
        $scope.accents = response.data;
        console.log($scope.accents);
      });
  }

  $scope.deleteAccent = function (id) {
    console.log(id);
    $http.delete('/galleryinput/accent/' + id)
      .then(function (response) {
        getAccents();

      });
  };


//******************* Greens functions ***********************

  $scope.addGreen = function () {
    var data = $scope.newGreen;
    $http.post('/galleryinput/green', data)
      .then(function () {
        console.log('POST /greens');
        getGreens();
        //clear input fields
        var $scc = $scope.newGreen;
        $scc.name = "";
        $scc.image = "";
      });
  };

  function getGreens() {
    $http.get('/accents/green')
      .then(function (response) {
        $scope.greens = response.data;
        console.log($scope.greens);
      });
  }

  $scope.deleteGreen = function (id) {
    console.log(id);
    $http.delete('/galleryinput/green/' + id)
      .then(function (response) {
        getGreens();

      });
  };

}]);
