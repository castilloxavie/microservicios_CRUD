const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

class ServerRestaQuery {
    constructor(db, OperacionesModels, RestaQueryControllers, restaQueryRoutes){
        this.app = express();
        this.port = process.env.PORT_RESTAQUERY || 4002;
        this.db = db;
        this.OperacionesModels = OperacionesModels;
        this.RestaQueryControllers = RestaQueryControllers;
        this.restaQueryRoutes = restaQueryRoutes;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', this.restaQueryRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor RestaQuery corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = ServerRestaQuery;