const db = require('../../src/database/databases');
const OperacionesModels = require('../../src/models/operacionesModels');
const SumaBodyControllers = require('../../src/controllers/suma/SumaBodyControllers');
const sumaBodyRoutes = require('../../src/router/suma/sumaBodyRoutes');
const ServerSumaBody = require('../../src/server/suma/ServerSumaBody');

const operacionesModel = new OperacionesModels(db);
const sumaBodyController = new SumaBodyControllers(operacionesModel);
const sumaBodyRoute = sumaBodyRoutes(sumaBodyController);

const server = new ServerSumaBody(db, operacionesModel, sumaBodyController, sumaBodyRoute);
server.listen();
