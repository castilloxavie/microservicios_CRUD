const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const DivisionPathControllers = require('../../src/controllers/division/DivisionPathControllers');
const divisionPathRoutes = require('../../src/router/division/divisionPathRoutes');
const ServerDivisionPath = require('../../src/server/division/ServerDivisionPath');

const operacionesModel = new OperacionesModels(db);
const divisionPathController = new DivisionPathControllers(operacionesModel);
const divisionPathRoute = divisionPathRoutes(divisionPathController);

const server = new ServerDivisionPath(db, operacionesModel, divisionPathController, divisionPathRoute);
server.listen();