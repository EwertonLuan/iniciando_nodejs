var express = require('express')
var data = []
var app = express();

app.post('/create/:name/:done', function(req, res){
    var obj = {
    name: req.params.name,
    done: req.params.done
    }

    data.push(obj)

    return res.status(200).json({
        statu: true,
        message: 'You data has been created',
        data: obj

    })
})

app.get('/', function(req, res){
    return res.status(200).json(data)
})

app.listen(3000, function(){
    console.log('The express has been started...');
});
