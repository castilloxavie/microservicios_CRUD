const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/multiplicacion/query', (req, res) => controller.crear(req, res));
    router.get('/multiplicacion/query', (req, res) => controller.listar(req, res));
    router.put('/multiplicacion/query/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/multiplicacion/query/:id', (req, res) => controller.eliminar(req, res));
    return router;
}
