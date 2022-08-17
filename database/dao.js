
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password:'ellenerafa',
    database: 'login',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = {

    findById2: function (id){
        return pool.promise().query('select * from users where users.id=?', [id])
    },

    findByUsername: function(nome) {
        return pool.promise().query('select * from users where users.nome=?', [nome])
    },

    list: function() {
        return pool.promise().query('select * from funcionarios')
    },
    findById(id) {
        return pool.promise().query('select * from funcionarios where id=?', [id])

    },
    save: function(funcionario) {
        return pool.promise().execute('INSERT INTO funcionarios (nome, email, data_nascimento, cpf, cidade, tipo_contrato) VALUES (?, ?, ?, ?, ?, ?)', [funcionario.nome, funcionario.email, funcionario.data_nascimento, funcionario.cpf, funcionario.cidade, funcionario.tipo_contrato])
    },
    update: function(funcionario) {
        return pool.promise().execute('UPDATE funcionarios set nome=?, email=?, data_nascimento=?, cpf=?, cidade=?, tipo_contrato=? where id=?', [funcionario.nome, funcionario.email, funcionario.data_nascimento, funcionario.cpf, funcionario.cidade, funcionario.tipo_contrato, funcionario.id])
    },
    remove: function(id) {
        return pool.promise().execute('delete from funcionarios where id=?', [id])
    },
    search: function(nome) {
        return pool.promise().query('select * from funcionarios where nome like ?', ['%' + nome + '%'])
    }
 

}