const db = require('../src/database/databases');
const OperacionesModels = require('../src/models/operacionesModels');
const SumaQueyControllers = require('../src/controllers/SumaQueyControllers');
const sumaQueryRoutes = require('../src/router/sumaQueryRoutes');
const ServerSumaQuery = require('./ServerSumaQuery');

const operacionesModel = new OperacionesModels(db);
const sumaQueryController = new SumaQueyControllers(operacionesModel);
const sumaQueryRoute = sumaQueryRoutes(sumaQueryController);

const server = new ServerSumaQuery(db, operacionesModel, sumaQueryController, sumaQueryRoute);
server.listen();
