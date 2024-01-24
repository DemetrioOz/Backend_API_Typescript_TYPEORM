import { getRepository } from "typeorm";
import { Usuario } from "../entities/Usuario";

interface IUsuario {
  id: string,
  nome: string,
  email?: string
}

export class CreateUserService {
  public async execute({ id, nome, email }: IUsuario) {
    const usuario = await getRepository(Usuario).
    createQueryBuilder().
    insert().
    into(Usuario).
    values([{ id, nome, email }]).
    execute()
    return usuario.identifiers[0];
  }
}