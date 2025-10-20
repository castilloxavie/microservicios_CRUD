const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const MultiplicacionPathControllers = require('../../src/controllers/multiplicacion/MultiplicacionPathControllers');
const multiplicacionPathRoutes = require('../../src/router/multiplicacion/multiplicacionPathRoutes');
const ServerMultiplicacionPath = require('../../src/server/multiplicacion/ServerMultiplicacionPath');

const operacionesModel = new OperacionesModels(db);
const multiplicacionPathController = new MultiplicacionPathControllers(operacionesModel);
const multiplicacionPathRoute = multiplicacionPathRoutes(multiplicacionPathController);

const server = new ServerMultiplicacionPath(db, operacionesModel, multiplicacionPathController, multiplicacionPathRoute);
server.listen();