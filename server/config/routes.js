var survey = require('./../controllers/surveys.js');
module.exports = function(app) {
  app.get('/survey', function(req, res) {
    survey.index(req, res);
  })
  app.get('/survey/:id', function(req, res) {
    survey.show(req, res);
  })
  app.get('/search/:searchString', function(req, res) {
    survey.search(req, res);
  })
  app.post('/survey', function(req, res) {
    survey.create(req, res);
  })
  app.put('/survey/:id', function(req, res) {
    survey.update(req, res);
  })
  app.delete('/survey/:id', function(req, res) {
    survey.delete(req, res);
  })
}
