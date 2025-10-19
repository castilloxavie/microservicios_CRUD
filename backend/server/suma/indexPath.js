const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const SumaPathControllers = require('../../src/controllers/suma/SumaPathControllers');
const sumaPathRoutes = require('../../src/router/suma/sumaPathRoutes');
const ServerSumaPath = require('../../src/server/suma/ServerSumaPath');

const operacionesModel = new OperacionesModels(db);
const sumaPathController = new SumaPathControllers(operacionesModel);
const sumaPathRoute = sumaPathRoutes(sumaPathController);

const server = new ServerSumaPath(db, operacionesModel, sumaPathController, sumaPathRoute);
server.listen();
