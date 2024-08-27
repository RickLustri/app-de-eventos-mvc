// Exportando os models
const eventoModels = require('../models/EventoModel');

// Criando o controlador de eventos
function exibirPaginaEventos(request, response) {
  response.render('eventos');
}

function exibirPaginaCriarEventos(request, response) {
  response.render('criarEvento');
}

// Responsavel por adicionar um novo evento
function criarEvento(request, response) {
  // Fazendo uma destruturação do request.body
  const { titulo, local, data } = request.body;

  // Adicionando o novo evento
  eventoModels.adicionarEvento(titulo, local, data);
  response.redirect('/eventos');
}

module.exports = {
  exibirPaginaEventos,
  exibirPaginaCriarEventos,
  criarEvento
}