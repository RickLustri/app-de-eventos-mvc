// importando as dependências
const md5 = require('md5');

const usuarios = [];

function adicionarUsuario(nome, email, senha) {
  usuarios.push({
    id: usuarios.length + 1,
    nome: nome,
    email: email,
    senha: md5(senha),
    criadoEm: new Date()
  })

  console.log(usuarios)
}

module.exports = { adicionarUsuario }