// Criando o controlador de login
function exibirPaginaLogin(request, response) {
  response.render('login');
}

// Exportando o controlador de login
module.exports = { exibirPaginaLogin };