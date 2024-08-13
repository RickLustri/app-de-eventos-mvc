// Criando o controlador de login
function exibirPaginaLogin(request, response) {
  response.render('login');
}

function exibirCriarConta(request, response) {
  response.render('criarConta');
}











// Exportando o controlador de login
module.exports = { exibirPaginaLogin, exibirCriarConta };