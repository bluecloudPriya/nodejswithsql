var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'priya@6468',
        server: 'DESKTOP-6JTOD35',
        database: 'HARIPRIYA'
    });
 
    return conn;
};

module.exports = connect;