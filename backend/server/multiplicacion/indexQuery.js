const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const MultiplicacionQueryControllers = require('../../src/controllers/multiplicacion/MultiplicacionQueryControllers');
const multiplicacionQueryRoutes = require('../../src/router/multiplicacion/multiplicacionQueryRoutes');
const ServerMultiplicacionQuery = require('../../src/server/multiplicacion/ServerMultiplicacionQuery');

const operacionesModel = new OperacionesModels(db);
const multiplicacionQueryController = new MultiplicacionQueryControllers(operacionesModel);
const multiplicacionQueryRoute = multiplicacionQueryRoutes(multiplicacionQueryController);

const server = new ServerMultiplicacionQuery(db, operacionesModel, multiplicacionQueryController, multiplicacionQueryRoute);
server.listen();