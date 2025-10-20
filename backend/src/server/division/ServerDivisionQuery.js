const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerDivisionQuery {
    constructor(db, OperacionesModels, DivisionQueryControllers, divisionQueryRoutes) {
        this.app = express();
        this.port = process.env.PORT_DIVISIONQUERY || 6002;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.DivisionQueryControllers = DivisionQueryControllers;
        this.divisionQueryRoutes = divisionQueryRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.divisionQueryRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor de division query corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerDivisionQuery;
