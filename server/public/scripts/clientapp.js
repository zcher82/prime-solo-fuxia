var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'datatables', 'smart-table', 'ui.bootstrap']);

app.constant('moment', moment);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController'
    })
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
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/user', {
    templateUrl: '/views/user.html',
    controller: "UserController"
  })
    .otherwise({
      redirectTo: '/home'
    })


}]);
