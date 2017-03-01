var app = angular.module('app');

app.controller('editController', function($scope, SurveyFactory, $location, $routeParams, User) {
    console.log('editController loaded');

    User.get(function(data) {
    console.log(data,"&&&&&&&");
      if (data == null) {
          $location.url('/');
      } else {
          $scope.user = data;
          console.log($scope.user,"is logged in");
      }
  })

  SurveyFactory.show($routeParams.id, function(data) {
      console.log($routeParams.id,"**********");
      $scope.survey = data;
  })

  $scope.voteOptionOne = function() {
      $scope.survey.option_one_count += 1;
      SurveyFactory.update($scope.survey, function(data) {

      })
  }

  $scope.voteOptionTwo = function() {
      $scope.survey.option_two_count += 1;
      SurveyFactory.update($scope.survey, function(data) {

      })
  }

  $scope.voteOptionThree = function() {
      $scope.survey.option_three_count += 1;
      SurveyFactory.update($scope.survey, function(data) {

      })
  }

  $scope.voteOptionFour = function() {
      $scope.survey.option_four_count += 1;
      SurveyFactory.update($scope.survey, function(data) {

      })
  }






  })
