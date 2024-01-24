import { Request, Response } from "express";
import { v4 as uuid } from 'uuid'
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email } = request.body;
    const createUserService: CreateUserService = new CreateUserService();
    const id = uuid();
    if(nome.length === 0 || email.length === 0) return response.status(400).json({ 'mesage': 'Preencha todos os dados'});
    const user = await createUserService.execute({ id, nome, email })
    return response.status(201).json(user);
  }
}