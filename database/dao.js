// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ifpe1234',
  database: 'users'
});

module.exports = {

    findById: function (id){
        return connection.promise().query('select * from users where id=?', [id])
    },

    findByUsername: function(nome) {
        return connection.promise().query('select * from users where nome=?', [nome])
    }
 

}