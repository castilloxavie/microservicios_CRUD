const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/suma/query', (req, res) => controller.crear(req, res));
    router.get('/suma/query', (req, res) => controller.listar(req, res));
    router.put('/suma/query/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/suma/query/:id', (req, res) => controller.eliminar(req, res));
    return router;
}