const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const MultiplicacionBodyControllers = require('../../src/controllers/multiplicacion/MultiplicacionBodyControllers');
const multiplicacionBodyRoutes = require('../../src/router/multiplicacion/multiplicacionBodyRoutes');
const ServerMultiplicacionBody = require('../../src/server/multiplicacion/ServerMultiplicacionBody');

const operacionesModel = new OperacionesModels(db);
const multiplicacionBodyController = new MultiplicacionBodyControllers(operacionesModel);
const multiplicacionBodyRoute = multiplicacionBodyRoutes(multiplicacionBodyController);

const server = new ServerMultiplicacionBody(db, operacionesModel, multiplicacionBodyController, multiplicacionBodyRoute);
server.listen();