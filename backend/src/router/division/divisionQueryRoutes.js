const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/division/query', (req, res) => controller.crear(req, res));
    router.get('/division/query', (req, res) => controller.listar(req, res));
    router.put('/division/query/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/division/query/:id', (req, res) => controller.eliminar(req, res));
    return router;
}
