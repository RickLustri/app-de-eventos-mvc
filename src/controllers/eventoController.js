function exibirPaginaEventos(request, response) {
  response.render('eventos');
}

function exibirPaginaCriarEventos(request, response) {
  response.render('criarEvento');
}

function criarEvento(request, response) {
  console.log(request.body);
}

module.exports = { exibirPaginaEventos, exibirPaginaCriarEventos, criarEvento }