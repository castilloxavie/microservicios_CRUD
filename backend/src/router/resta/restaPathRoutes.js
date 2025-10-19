const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/resta/path/:numero1/:numero2', (req, res) => controller.crear(req, res));
    router.get('/resta/path', (req, res) => controller.listar(req, res));
    router.put('/resta/path/:id/:numero1/:numero2', (req, res) => controller.actualizar(req, res));
    router.delete('/resta/path/:id', (req, res) => controller.eliminar(req, res));
    return router;
}