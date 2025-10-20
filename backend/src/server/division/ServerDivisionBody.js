const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerDivisionBody {
    constructor(db, OperacionesModels, DivisionBodyControllers, divisionBodyRoutes) {
        this.app = express();
        this.port = process.env.PORT_DIVISIONBODY || 6001;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.DivisionBodyControllers = DivisionBodyControllers;
        this.divisionBodyRoutes = divisionBodyRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.divisionBodyRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor de division body corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerDivisionBody;
