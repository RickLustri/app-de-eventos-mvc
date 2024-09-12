const express = require('express');
const loginControllers = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginControllers.exibirPaginaLogin);
router.post('/autenticar', loginControllers.autenticarUsuario);

module.exports = router;