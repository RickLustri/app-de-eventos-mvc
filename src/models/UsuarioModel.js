const usuarios = [];

function adicionarUsuario(nome, email, senha) {
  usuarios.push({
    id: usuarios.length + 1,
    nome: nome,
    email: email,
    senha: senha,
    criadoEm: new Date()
  })

  console.log(usuarios)
}

module.exports = { adicionarUsuario }