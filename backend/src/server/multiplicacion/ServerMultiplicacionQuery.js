const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerMultiplicacionQuery {
    constructor(db, OperacionesModels, MultiplicacionQueryControllers, multiplicacionQueryRoutes) {
        this.app = express();
        this.port = process.env.PORT_MULTIPLICACIONQUERY || 5002;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.MultiplicacionQueryControllers = MultiplicacionQueryControllers;
        this.multiplicacionQueryRoutes = multiplicacionQueryRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.multiplicacionQueryRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor de multiplicacion query corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerMultiplicacionQuery;
