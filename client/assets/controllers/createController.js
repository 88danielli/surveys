var app = angular.module('app');

app.controller('createController', function($scope, SurveyFactory, $location, $routeParams, User) {
  console.log('new Controller Loaded');

  $scope.errors = {};

  User.get(function(data) {
  console.log(data,"&&&&&&&");
    if (data == null) {
        $location.url('/');
    } else {
        $scope.user = data;
        console.log($scope.user,"is logged in");
    }
})

  SurveyFactory.index(function(data) {
    $scope.surveys = data;
  })

  $scope.create = function(user) {
    $scope.errors = {};
    $scope.newSurvey.user = $scope.user;
    console.log($scope.newSurvey,"**********");
    SurveyFactory.create($scope.newSurvey, function(data) {
      if (data.errors) {
        console.log(data.errors);
        $scope.errors = data.errors;
      } else {
        $scope.newSurvey = {};
        $location.url('/dashboard');
      }
    })
  }

  $scope.delete = function(appointment) {
    SurveyFactory.delete(appointment, function(data) {
      SurveyFactory.index(function(data) {
        $scope.surveys = data;
      });
    });
  }
})
