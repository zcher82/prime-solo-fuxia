var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'datatables', 'smart-table', 'ui.bootstrap']);

app.constant('moment', moment);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/views/login.html',
      controller: 'LoginController'
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/userlanding', {
    templateUrl: '/views/userlanding.html',
    controller: "UserlandingController"
    })
    // .when('/home', {
    //   templateUrl: '/views/home.html',
    //   controller: 'HomeController'
    // })
    .when('/accounts', {
      templateUrl: '/views/accounts.html',
      controller: 'AccountsController'
    })
    .when('/floralaccents', {
      templateUrl: '/views/floralaccents.html',
      controller: 'FloralAccentsController'
    })
    .when('/flowers', {
      templateUrl: '/views/flowers.html',
      controller: 'FlowersController'
    })
    .when('/gallery', {
      templateUrl: '/views/gallery.html',
      controller: 'GalleryController'
    })
    .when('/flowerdb', {
      templateUrl: '/views/flowerdb.html',
      controller: 'FlowerdbController'
    })
    .when('/galleryinput', {
      templateUrl: '/views/galleryinput.html',
      controller: 'GalleryInputController'
    })

    .otherwise({
      redirectTo: '/login'
    })

}]);

// Setup the filter
app.filter('capitalize', function() {

  // Create the return function and set the required parameter as well as an optional paramater
  return function(input, char) {

    if (isNaN(input)) {

      // If the input data is not a number, perform the operations to capitalize the correct letter.
      var char = char - 1 || 0;
      var letter = input.charAt(char).toUpperCase();
      var out = [];

      for (var i = 0; i < input.length; i++) {
        if (i == char) {
          out.push(letter);
        } else {
          out.push(input[i]);
        }
      }
      return out.join('');

    } else {
      return input;
    }

  }
});
