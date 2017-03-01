var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
        question: {type: String, required: true, minlength: 8},
        option_one: {type: String, required: true, minlength: 3},
        option_one_count: {type: Number, default: 0},
        option_two: {type: String, required: true, minlength: 3},
        option_two_count: {type: Number, default: 0},
        option_three: {type: String, required: true, minlength: 3},
        option_three_count: {type: Number, default: 0},
        option_four: {type: String, required: true, minlength: 3},
        option_four_count: {type: Number, default: 0},
        user: {type: String, required: true}
    }, {timestamps: true});
mongoose.model('Survey', SurveySchema);
