var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connection")();


var routers = function()

{
    router.route('/')
    .get(function(req,res){
        conn.connect().then(function()
    {
        var sqlquery = "select * from products";
        var req = new sql.Request(conn);
        req.query(sqlquery).then(function(recordset){
            res.json(recordset.recordset);
            conn.close();
        }).catch(function(err){
            conn.close();
            res.status(400).send("error while insertingting data");
        });
    }).catch(function(err){
       conn.close();
       res.status(400).status("error while inserting data");

    })
    })
    return router;
};

module.exports=routers