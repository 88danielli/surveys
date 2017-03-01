var app = angular.module('app');

app.controller('indexController', function($scope, SurveyFactory, $location, $routeParams, User) {
  console.log('index Controller Loaded');

  $scope.login = function() {
      User.get(function(data) {
      console.log(data,"&&&&&&&");
        if (data == null) {
            user = $scope.newUser.name;
            User.set(user, function(data) {
                $scope.user = data;
            })
        } else {
            $scope.user = data;
            console.log($scope.user);
        }
        $location.url('/dashboard')

    })
}


  $scope.errors = {};


})
