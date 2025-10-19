const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/resta/body', (req, res) => controller.crear(req, res));
    router.get('/resta/body', (req, res) => controller.listar(req, res));
    router.put('/resta/body/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/resta/body/:id', (req, res) => controller.eliminar(req, res));
    return router;
}