app.service('userData', ['$http', '$location', function ($http, $location) {

  var user = {};

  this.getUser = function() {
    $http.get('/userlanding')
      .then(function(response) {
        if(response.data.username) {
            user = response.data;
        } else {
            $location.path("/home");
        }
    });
    return user;
  }

}]);
