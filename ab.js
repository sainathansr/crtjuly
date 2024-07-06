var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
})
app.get('/process',function(req,res){
    response={
        frist_name:req.query.fristname,
        last_name:req.query.lastname
    };
    console.log(response)
    res.end(JSON.stringify(response));

})
var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("example app listening at http://%s%s",host,port)
})
