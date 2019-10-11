var Todos = require('../models/todomodel');


module.exports = function(app){

    app.get('/api/seeder',function(req,res){

        var setuptodos = [
            {
                username:'thilak',
                todo:'node',
                isDone:false,
                hasAttachment:false
            },
            {
                username:'hi',
                todo:'text',
                isDone:false,
                hasAttachment:false
            },
            {
                username:'lak',
                todo:'never fails',
                isDone:false,
                hasAttachment:false
            }
        ]

        Todos.create(setuptodos,function(err,result){
            res.send(result);
        });

    })
}