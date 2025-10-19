const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const RestaBodyControllers = require('../../src/controllers/resta/RestaBodyControllers');
const restaBodyRoutes = require('../../src/router/resta/restaBodyRoutes');
const ServerRestaBody = require('../../src/server/resta/ServerRestaBody');

const operacionesModel = new OperacionesModels(db);
const restaBodyController = new RestaBodyControllers(operacionesModel);
const restaBodyRoute = restaBodyRoutes(restaBodyController);

const server = new ServerRestaBody(db, operacionesModel, restaBodyController, restaBodyRoute);
server.listen();