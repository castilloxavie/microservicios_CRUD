const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const DivisionQueryControllers = require('../../src/controllers/division/DivisionQueryControllers');
const divisionQueryRoutes = require('../../src/router/division/divisionQueryRoutes');
const ServerDivisionQuery = require('../../src/server/division/ServerDivisionQuery');

const operacionesModel = new OperacionesModels(db);
const divisionQueryController = new DivisionQueryControllers(operacionesModel);
const divisionQueryRoute = divisionQueryRoutes(divisionQueryController);

const server = new ServerDivisionQuery(db, operacionesModel, divisionQueryController, divisionQueryRoute);
server.listen();