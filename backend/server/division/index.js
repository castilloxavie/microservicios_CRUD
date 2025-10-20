const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const DivisionBodyControllers = require('../../src/controllers/division/DivisionBodyControllers');
const divisionBodyRoutes = require('../../src/router/division/divisionBodyRoutes');
const ServerDivisionBody = require('../../src/server/division/ServerDivisionBody');

const operacionesModel = new OperacionesModels(db);
const divisionBodyController = new DivisionBodyControllers(operacionesModel);
const divisionBodyRoute = divisionBodyRoutes(divisionBodyController);

const server = new ServerDivisionBody(db, operacionesModel, divisionBodyController, divisionBodyRoute);
server.listen();