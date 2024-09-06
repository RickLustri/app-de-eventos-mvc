const bancoDeDados = require('../config/bancoDeDados');

const eventos = [{
  id: 1,
  titulo: 'Futebol',
  local: 'Centro',
  data: '2024-09-10'
}];

function adicionarEvento(titulo, local, data) {
 
  bancoDeDados.query(`
    INSERT INTO eventos (titulo, localEvento, dataEvento, criadoEm)
    VALUES ('${titulo}', '${local}', '${data}', now())
    `)
    .then( ()=> {
      console.log('Evento criado com sucesso!');
    })
    .catch( (error) => {
        console.error('Erro ao criar evento, ', error);
    })
}

function obterEventos() {
  return eventos
}


module.exports = { adicionarEvento, obterEventos }