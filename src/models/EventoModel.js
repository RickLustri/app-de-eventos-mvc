const bancoDeDados = require('../config/bancoDeDados');

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

module.exports = { adicionarEvento }