import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/CreateUserControllers';
import { DeleteUserController } from './controllers/DeleteUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const routes = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

routes.get('/', (request: Request, response: Response) => {
  return response.json({'mesage': 'Api'})
});

routes.post('/users', createUserController.handle);
routes.get('/users', getAllUserController.handle)
routes.patch('/users', updateUserController.handle)
routes.delete('/users/:id', deleteUserController.handle)

export { routes }