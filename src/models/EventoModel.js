const eventos = [];

function adicionarEvento(titulo, local, data) {
  eventos.push({
    id: eventos.length + 1,
    titulo: titulo,
    local: local,
    data: data
  })

  console.log(eventos)
}

module.exports = { adicionarEvento }