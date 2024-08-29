// Importando as dependências
const mySql2 = require('mysql2/promise');

// Configuração do banco de dados
const pool = mySql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'app_eventos'
});

// Testando a conexão
pool.getConnection()
  .then((connection) => {
    console.log('Conectado ao MySQL');
    connection.release();
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MySQL:', error);
  });

// Exportando o pool
module.exports = pool;