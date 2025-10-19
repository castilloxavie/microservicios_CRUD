const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const RestaPathControllers = require('../../src/controllers/resta/RestaPathControllers');
const restaPathRoutes = require('../../src/router/resta/restaPathRoutes');
const ServerRestaPath = require('../../src/server/resta/ServerRestaPath');

const operacionesModel = new OperacionesModels(db);
const restaPathController = new RestaPathControllers(operacionesModel);
const restaPathRoute = restaPathRoutes(restaPathController);

const server = new ServerRestaPath(db, operacionesModel, restaPathController, restaPathRoute);
server.listen();