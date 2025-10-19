const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerRestaPath {
    constructor(db, OperacionesModels, RestaPathControllers, restaPathRoutes) {
        this.app = express();
        this.port = process.env.PORT_RESTAPARAMS || 4003;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.RestaPathControllers = RestaPathControllers;
        this.restaPathRoutes = restaPathRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.restaPathRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor RestaPath corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = ServerRestaPath;