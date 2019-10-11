var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username:String,
    todo:String,
    isDone:Boolean,
    hasAttachment:Boolean
});

var todos = mongoose.model('todos',todoSchema);

module.exports = todos;

// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var todoSchema = new Schema({
    
// });

// var todos = mongoose.model('todos',todoSchema);

// module.exports = todos;