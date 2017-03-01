var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html',
    controller: 'indexController'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/create', {
      templateUrl: 'partials/create.html',
      controller: 'createController',
  })
  .when('/survey/:id', {
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .otherwise('/')
})
