const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/suma/path/:numero1/:numero2', (req, res) => controller.crear(req, res));
    router.get('/suma/path', (req, res) => controller.listar(req, res));
    router.put('/suma/path/:id/:numero1/:numero2', (req, res) => controller.actualizar(req, res));
    router.delete('/suma/path/:id', (req, res) => controller.eliminar(req, res));
    return router;
};
