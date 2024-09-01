// importando as dependências
const md5 = require('md5');
const bancoDeDados = require('../config/bancoDeDados');

function adicionarUsuario(nome, email, senha) {

  // Adicionando o novo usuario
  bancoDeDados.query(`
    INSERT INTO usuarios (nome, email, senha, criadoEm) 
    VALUES ('${nome}', '${email}', '${md5(senha)}', now())
    `)
    .then(() => {
      console.log('Usário criado com sucesso!')
    })
    .catch((erro) => {
      console.error('Erro ao inserir dados, ', erro)
    })
}

module.exports = { adicionarUsuario }