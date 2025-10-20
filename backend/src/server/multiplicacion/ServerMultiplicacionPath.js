const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerMultiplicacionPath {
    constructor(db, OperacionesModels, MultiplicacionPathControllers, multiplicacionPathRoutes) {
        this.app = express();
        this.port = process.env.PORT_MULTIPLICACIONPATH || 5003;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.MultiplicacionPathControllers = MultiplicacionPathControllers;
        this.multiplicacionPathRoutes = multiplicacionPathRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.multiplicacionPathRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor de multiplicacion path corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerMultiplicacionPath;
