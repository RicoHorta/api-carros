const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');//rotas ficam com as rotas e códigos vão para o Controller

router.get('/carros', CarroController.buscarTodos);

router.get('/carro/:codigo', CarroController.buscarUm);

router.post('/carro', CarroController.inserir); // ROTA POST

router.put('/carro/:codigo', CarroController.alterar); // Rota PUT

router.delete('/carro/:codigo', CarroController.excluir); // Rota DELETE

// testado no site https://resttesttest.com/

module.exports = router;
