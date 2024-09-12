const bancoDeDados = require('../config/bancoDeDados');


function adicionarEvento(titulo, local, data) {
 
  bancoDeDados.query(`
    INSERT INTO eventos (titulo, local, data, criadoEm)
    VALUES ('${titulo}', '${local}', '${data}', now())
    `)
    .then( ()=> {
      console.log('Evento criado com sucesso!');
    })
    .catch( (error) => {
        console.error('Erro ao criar evento, ', error);
    })
}

async function obterEventos() {

   const eventos = await bancoDeDados.query(`
    SELECT * FROM eventos
    `)

    return eventos[0];

}


module.exports = { adicionarEvento, obterEventos }