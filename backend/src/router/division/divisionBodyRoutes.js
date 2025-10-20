const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/division/body', (req, res) => controller.crear(req, res));
    router.get('/division/body', (req, res) => controller.listar(req, res));
    router.put('/division/body/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/division/body/:id', (req, res) => controller.eliminar(req, res));
    return router;
}
