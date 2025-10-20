const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/multiplicacion/body', (req, res) => controller.crear(req, res));
    router.get('/multiplicacion/body', (req, res) => controller.listar(req, res));
    router.put('/multiplicacion/body/:id', (req, res) => controller.actualizar(req, res));
    router.delete('/multiplicacion/body/:id', (req, res) => controller.eliminar(req, res));
    return router;
}
