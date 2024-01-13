import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/CreateUserControllers';

const routes = Router();
const createUserController = new CreateUserController()

routes.get('/', (request: Request, response: Response) => {
  return response.json({'mesage': 'Api'})
});

routes.post('/users', (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

export { routes }