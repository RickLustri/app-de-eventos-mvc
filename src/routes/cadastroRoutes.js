const express = require('express');
const cadastroControllers = require('../controllers/cadastroController');

const router = express.Router();

router.get('/criar-conta', cadastroControllers.exibirCriarConta);
router.post('/criar-usuario', cadastroControllers.adicionarUsuario);

module.exports = router;