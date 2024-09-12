const usuarioModel = require('../models/usuarioModel');
const md5 = require('md5');

// Criando o controlador de login
function exibirPaginaLogin(request, response) {
  response.render('login');
}

// Responsavel por autenticar o usuario
async function autenticarUsuario(request, response) {
  // pegando os dados do request.body
  const { email, senha } = request.body;

  // Buscando o usuario no banco de dados
  const usuario = await usuarioModel.buscarUsuarioPorEmail(email);

  // Verificando se o usuario existe
  if (usuario == undefined) {
    response.render('login');
    return;
  }

  // Verificando se a senha esta correta
  if (md5(senha) !== usuario.senha) {
    response.render('login');
    return;
  }

}

// Exportando o controlador de login
module.exports = {
  exibirPaginaLogin,
  autenticarUsuario
};