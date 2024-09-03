const express = require('express');
const eventosControllers = require('../controllers/eventoController');

const router = express.Router();

router.get('/eventos', eventosControllers.exibirPaginaEventos);
router.get('/criar-evento', eventosControllers.exibirPaginaCriarEventos);
router.post('/criar-evento', eventosControllers.criarEvento);

module.exports = router;