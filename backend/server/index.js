const db = require('../src/database/databases');
const OperacionesModels = require('../src/models/operacionesModels');
const SumaBodyControllers = require('../src/controllers/SumaBodyControllers');
const sumaBodyRoutes = require('../src/router/sumaBodyRoutes');
const ServerSumaBody = require('./ServerSumaBody');

const operacionesModel = new OperacionesModels(db);
const sumaBodyController = new SumaBodyControllers(operacionesModel);
const sumaBodyRoute = sumaBodyRoutes(sumaBodyController);

const server = new ServerSumaBody(db, operacionesModel, sumaBodyController, sumaBodyRoute);
server.listen();
