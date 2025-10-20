const express = require('express');

module.exports = (controller) => {
    const router = express.Router();


    router.post('/multiplicacion/path/:numero1/:numero2', (req, res) => controller.crear(req, res));
    router.get('/multiplicacion/path', (req, res) => controller.listar(req, res));
    router.put('/multiplicacion/path/:id/:numero1/:numero2', (req, res) => controller.actualizar(req, res));
    router.delete('/multiplicacion/path/:id', (req, res) => controller.eliminar(req, res));
    return router;
};
