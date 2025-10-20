const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerMultiplicacionBody {
    constructor(db, OperacionesModels, MultiplicacionBodyControllers, multiplicacionBodyRoutes) {
        this.app = express();
        this.port = process.env.PORT_MULTIPLICACIONBODY || 5001;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.MultiplicacionBodyControllers = MultiplicacionBodyControllers;
        this.multiplicacionBodyRoutes = multiplicacionBodyRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', this.multiplicacionBodyRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor de multiplicacion body corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = ServerMultiplicacionBody;
