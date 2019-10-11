var Todos =  require('../models/todomodel');

var bodyParser = require('body-parser');

module.exports = function(app){

    // parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 


app.get('/api/todos/:uname',function(req,res){

    Todos.find({username:req.params.uname},function(err,todos){
        if(err) throw err;
      
        res.send(todos);
    });

});

app.get('/api/todo/:id',function(req,res){
    Todos.findById({_id: req.params.id}, function(err,todo){
        if(err) throw err;
        // console.log(result);
        res.send(todo);
        //console.log(_id);
    });
});


app.post('/api/todo',function(req,res){

    if(req.body.id) {
        Todos.findOneAndUpdate(req.body.id,{
            username:req.body.username,
            todo:req.body.todo,isDone:req.body.isDone,hasAttachment:req.body.hasAttachment
        },function(err,todos){

            if(err) throw err;

            res.send('success');
        });
    }
    else
    {
            var newTodo = Todos({
                username:'thi',
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            });
            newTodo.save(function(err){

                if(err) throw err;
                res.send('Success');
            });
    }

});

app.delete('/api/todo',function(req,res){
     
  

        Todos.findOneAndRemove(req.body.id, function(err){
            if(err) throw err;

            res.send('Success');
        });

  

})


}