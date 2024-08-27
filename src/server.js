// Importando as dependências
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const enableHotReload = require("./hot-reload");

// Puxando os controladores da aplicação
const loginControllers = require("./controllers/loginController");
const cadastroControllers = require("./controllers/cadastroController");
const eventosControllers = require("./controllers/eventoController");
const homeControllers = require("./controllers/homeController");

// Chamando o express
const app = express();

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);


// Rotas das paginas
app.get("/", homeControllers.exibirPaginaHome);

app.get("/login", loginControllers.exibirPaginaLogin);
app.get("/criar-conta", cadastroControllers.exibirCriarConta);
app.post("/criar-usuario", cadastroControllers.adicionarUsuario);

app.get("/eventos", eventosControllers.exibirPaginaEventos);
app.get("/criar-evento", eventosControllers.exibirPaginaCriarEventos);
app.post("/criar-evento", eventosControllers.criarEvento);


// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});