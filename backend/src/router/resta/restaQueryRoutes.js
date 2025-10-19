const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/resta/query', (req, res) => controller.crear(req, res));
    router.get('/resta/query', (req, res) => controller.listar(req, res));
    router.put('/resta/query/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/resta/query/:id', (req, res) => controller.eliminar(req, res));
    return router;
}