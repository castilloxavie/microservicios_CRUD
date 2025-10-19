const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const RestaQueryControllers = require('../../src/controllers/resta/RestaQueryControllers');
const restaQueryRoutes = require('../../src/router/resta/restaQueryRoutes');
const ServerRestaQuery = require('../../src/server/resta/ServerRestaQuery');

const operacionesModel = new OperacionesModels(db);
const restaQueryController = new RestaQueryControllers(operacionesModel);
const restaQueryRoute = restaQueryRoutes(restaQueryController);

const server = new ServerRestaQuery(db, operacionesModel, restaQueryController, restaQueryRoute);
server.listen();