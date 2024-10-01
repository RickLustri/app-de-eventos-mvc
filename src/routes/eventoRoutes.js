const express = require('express');
const eventosControllers = require('../controllers/eventoController');
const autenticarRotaUsuario = require('../middlewares/autenticar');


const router = express.Router();

router.get('/eventos', autenticarRotaUsuario.protegerRotaUsuario, eventosControllers.exibirPaginaEventos);
router.get('/criar-evento', autenticarRotaUsuario.protegerRotaAdmin, eventosControllers.exibirPaginaCriarEventos);
router.post('/criar-evento', eventosControllers.criarEvento);

module.exports = router;