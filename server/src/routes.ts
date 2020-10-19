import express from 'express';
import ClassesController from './controllers/classesController';
import ConnectionController from './controllers/connectionController';


const routes = express.Router();

const classesControllers = new ClassesController();
const connectionControllers = new ConnectionController();


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionControllers.create);
routes.get('/connections', connectionControllers.index);

export default routes;