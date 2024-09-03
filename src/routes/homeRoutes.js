const express = require('express');
const homeControllers = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeControllers.exibirPaginaHome);

module.exports = router;