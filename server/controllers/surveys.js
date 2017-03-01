var mongoose = require('mongoose');

var Survey = mongoose.model('Survey');

console.log('survey controller');
module.exports = {
  index: function(req,res){
    Survey.find({}, function(err, data){
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
  },
  create: function(req,res){
    var newSurvey = new Survey(req.body);
        console.log(newSurvey);
        newSurvey.save(function(err, data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(data)
            }
        });
  },
  update: function(req,res){
    console.log(req.params, req.body);
    Survey.findOne({_id: req.params.id}, function(err, data) {
      for (var i in req.body) {
        if (data[i] !== req.body[i]) {
          data[i] = req.body[i];
        }
      }
      data.save(function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    })
  },
  delete: function(req,res){
    Survey.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Survey.remove(data, function(error, datum) {
          if (error) {
            console.log(error);
            res.json(error);
          } else {
            console.log(datum);
            res.json(datum);
          }
        })
      }
    })
  },
  show: function(req,res){
    console.log(req.params);
    Survey.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
},
search: function(req, res){
    Survey.find({user: req.params.searchString}, function(err, data) {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
    })
}
}
