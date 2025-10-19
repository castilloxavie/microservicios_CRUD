const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerSumaQuery {
    constructor(db, OperacionesModels, SumaQueyControllers, sumaQueryRoutes) {
        this.app = express();
        this.port = process.env.PORT_SUMAQUERY || 3002;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.SumaQueyControllers = SumaQueyControllers;
        this.sumaQueryRoutes = sumaQueryRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.sumaQueryRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor SumaQuery corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerSumaQuery;
