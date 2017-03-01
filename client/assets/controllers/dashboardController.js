var app = angular.module('app');

app.controller('dashboardController', function($scope, SurveyFactory, $location, $routeParams, User) {
    console.log("dashboardController loaded");



    User.get(function(data) {
    console.log(data,"&&&&&&&");
      if (data == null) {
          $location.url('/');
      } else {
          $scope.user = data;
          console.log($scope.user,"is logged in");
      }
  })

    $scope.errors = {};

    $scope.logout = function() {
        User.delete(function(data) {
            $scope.user = data;
            $location.url('/');
        })
    }

    SurveyFactory.index(function(data) {
      $scope.surveys = data;
    })

    $scope.delete = function(survey) {
    SurveyFactory.delete(survey, function(data) {
      SurveyFactory.index(function(data) {
        $scope.surveys = data;
      });
    });
    }


    $scope.search = function() {
        if (!$scope.searchString) {
            SurveyFactory.index(function(data) {
              $scope.surveys = data;
            });
        } else {
            SurveyFactory.search($scope.searchString, function(data) {
                if (data.errors) {
                  console.log(data.errors);
                  $scope.errors = data.errors;
                } else {
                  $scope.surveys = data;
                }
              })
        }

        }




})
