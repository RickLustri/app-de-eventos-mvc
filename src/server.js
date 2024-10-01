// Importando as dependências
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const enableHotReload = require("./hot-reload");
const session = require('express-session');

// Puxando os controladores da aplicação
const loginRoutes = require("./routes/loginRoutes");
const cadastroRoutes = require("./routes/cadastroRoutes");
const eventoRoutes = require("./routes/eventoRoutes");
const homeRoutes = require("./routes/homeRoutes");

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

// Configuração do express-session
app.use(
  session({
    secret: 'chave-hiper-mega-super-estremamente-bolada-e-secreta-usando-o-ç-para-a-super-segurança',
    resave: false, // Não salva a sessão a cada requisição
    saveUninitialized: false, // Não salva a sessão vazias
  })
);

// Habilitar hot-reload
enableHotReload(app);


// Rotas das paginas
app.use('/', homeRoutes);
app.use('/', loginRoutes);
app.use('/', cadastroRoutes);
app.use('/', eventoRoutes);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});