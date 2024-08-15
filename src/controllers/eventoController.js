function exibirPaginaEventos(request, response) {
  response.render('eventos');
}

function exibirPaginaCriarEventos(request, response) {
  response.render('criarEvento');
}

module.exports = { exibirPaginaEventos, exibirPaginaCriarEventos }