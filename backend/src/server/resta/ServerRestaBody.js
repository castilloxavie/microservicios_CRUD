const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerRestaBody {
    constructor(db, OperacionesModels, RestaBodyControllers, restaBodyRoutes) {
        this.app = express();
        this.port = process.env.PORT_RESTABODY || 4001;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.RestaBodyControllers = RestaBodyControllers;
        this.restaBodyRoutes = restaBodyRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.restaBodyRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = ServerRestaBody;