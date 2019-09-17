var express = require('express');
var app = express();
var port = process.env.port || 1337;
var productcontroller =require('./controller/productcontroller')();
 
// app.get("/product",function(request,response)
// {
//     response.json({"Message":"Welcome to Node js"});
// });

app.use("/api/products",productcontroller);
 
app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});