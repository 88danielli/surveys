app.factory('SurveyFactory', function($http) {
  console.log('Survey Factory loaded');
  var factory = {};

  factory.index  = function(callback) {
    $http.get('/survey').then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.search = function(searchString, callback) {
      $http.get('/search/'+searchString).then(function(res) {
          if (typeof callback === 'function') {
            callback(res.data);
          }
      })
  }
  factory.show = function(id, callback) {
    $http.get('/survey/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.create = function(newSurvey, callback) {
    $http.post('/survey/', newSurvey).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.update = function(survey, callback) {
    $http.put('/survey/'+survey._id, survey).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.delete = function(survey, callback) {
    $http.delete('/survey/'+survey._id).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  return factory;
})

app.factory('User', function() {
    console.log("userfactory");
    var factory = {};
    var user = null;

    factory.get = function(callback) {
        callback(user);
    }
    factory.set = function(username, callback) {
        user = username;
        callback(user);
    }
    factory.delete = function(callback) {
        user = null;
        callback(user);
    }

    return factory;
})
