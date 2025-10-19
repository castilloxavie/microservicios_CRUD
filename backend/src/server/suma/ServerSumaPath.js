const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerSumaPath {
    constructor(db, OperacionesModels, SumaPathControllers, sumaPathRoutes) {
        this.app = express();
        this.port = process.env.PORT_SUMAPARAMS || 3003;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.SumaPathControllers = SumaPathControllers;
        this.sumaPathRoutes = sumaPathRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.sumaPathRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor SumaPath corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerSumaPath;
