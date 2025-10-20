const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/suma/body', (req, res) => controller.crear(req, res));
    router.get('/suma/body', (req, res) => controller.listar(req, res));
    router.put('/suma/body/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/suma/body/:id', (req, res) => controller.eliminar(req, res));
    return router;
}