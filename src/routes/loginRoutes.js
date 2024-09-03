const express = require('express');
const loginControllers = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginControllers.exibirPaginaLogin);

module.exports = router;