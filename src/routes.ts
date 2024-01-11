import { Router, Request, Response } from 'express'

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({'mesage': 'Api'})
})

routes.get('/users', (request: Request, response: Response) => {
  return response.json([
    {
      nome: 'nome1'
    },
    {
      nome: 'nome2'
    },
    {
      nome: 'nome3'
    },
    {
      nome: 'nome4'
    },
  ])
})

export { routes }