// Criando o controlador de cadastro
function exibirCriarConta(request, response) {
  response.render('criarConta');
}

function criarConta(request, response) {
  console.log(request.body);
}

module.exports = { exibirCriarConta, criarConta };