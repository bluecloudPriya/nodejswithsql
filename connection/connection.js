var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'username',
        password: '12345',
        server: 'servername',
        database: 'testdb'
    });
 
    return conn;
};

module.exports = connect;