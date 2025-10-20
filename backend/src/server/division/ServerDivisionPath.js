const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerDivisionPath {
    constructor(db, OperacionesModels, DivisionPathControllers, divisionPathRoutes) {
        this.app = express();
        this.port = process.env.PORT_DIVISIONPATH || 6003;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.DivisionPathControllers = DivisionPathControllers;
        this.divisionPathRoutes = divisionPathRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.divisionPathRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor de division path corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerDivisionPath;
