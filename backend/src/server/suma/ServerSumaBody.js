const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerSumaBody {
    constructor(db, OperacionesModels, SumaBodyControllers, sumaBodyRoutes) {
        this.app = express();
        this.port = process.env.PORT_SUMABODY || 3001;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.SumaBodyControllers = SumaBodyControllers;
        this.sumaBodyRoutes = sumaBodyRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.sumaBodyRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerSumaBody;
