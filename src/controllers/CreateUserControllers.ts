import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  private createUserService: CreateUserService;

  constructor() {
    this.createUserService = new CreateUserService();
  }
  
  handle(request: Request, response: Response) {
    const { nome, email } = request.body;
    if(nome.length === 0 || email.length === 0) return response.status(400).json({ 'mesage': 'Preencha todos os dados'});
    const user = this.createUserService.execute({ nome, email })
    return response.status(200).json(user);
  }
}