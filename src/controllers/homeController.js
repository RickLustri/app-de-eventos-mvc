// Criando o controlador de home
function exibirPaginaHome(request, response) {
  response.render('home');
}

module.exports = { exibirPaginaHome }