const db = require('../src/database/databases');
const OperacionesModels = require('../src/models/operacionesModels');
const SumaPathControllers = require('../src/controllers/SumaPathControllers');
const sumaPathRoutes = require('../src/router/sumaPathRoutes');
const ServerSumaPath = require('./ServerSumaPath');

const operacionesModel = new OperacionesModels(db);
const sumaPathController = new SumaPathControllers(operacionesModel);
const sumaPathRoute = sumaPathRoutes(sumaPathController);

const server = new ServerSumaPath(db, operacionesModel, sumaPathController, sumaPathRoute);
server.listen();
