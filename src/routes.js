const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');//rotas ficam com as rotas e códigos vão para o Controller

router.get('/carros', CarroController.buscarTodos);

router.get('/carro/:codigo', CarroController.buscarUm);


module.exports = router;
