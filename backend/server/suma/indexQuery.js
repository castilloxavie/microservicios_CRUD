const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/OperacionesModels');
const SumaQueryControllers = require('../../src/controllers/suma/SumaQueryControllers');
const sumaQueryRoutes = require('../../src/router/suma/sumaQueryRoutes');
const ServerSumaQuery = require('../../src/server/suma/ServerSumaQuery');

const operacionesModel = new OperacionesModels(db);
const sumaQueryController = new SumaQueryControllers(operacionesModel);
const sumaQueryRoute = sumaQueryRoutes(sumaQueryController);

const server = new ServerSumaQuery(db, operacionesModel, sumaQueryController, sumaQueryRoute);
server.listen();
