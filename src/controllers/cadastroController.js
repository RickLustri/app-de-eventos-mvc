// Exportando os models
const usuarioModels = require('../models/usuarioModel');

// Criando o controlador de cadastro
function exibirCriarConta(request, response) {
  response.render('criarConta');
}

// Responsavel por adicionar um novo usuario
function adicionarUsuario(request, response) {
  // Fazendo uma destruturação do request.body
  const { nome, email, senha } = request.body;

  // Adicionando o novo usuario
  usuarioModels.adicionarUsuario(nome, email, senha);
  response.redirect('/login');
}

module.exports = {
  exibirCriarConta,
  adicionarUsuario
};