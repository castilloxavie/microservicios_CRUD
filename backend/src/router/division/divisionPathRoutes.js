const express = require('express');

module.exports = (controller) => {
    const router = express.Router();


    router.post('/division/path/:numero1/:numero2', (req, res) => controller.crear(req, res));
    router.get('/division/path', (req, res) => controller.listar(req, res));
    router.put('/division/path/:id/:numero1/:numero2', (req, res) => controller.actualizar(req, res));
    router.delete('/division/path/:id', (req, res) => controller.eliminar(req, res));
    return router;
};
