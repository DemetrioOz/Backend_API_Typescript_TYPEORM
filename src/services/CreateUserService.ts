interface IUsuario {
  nome: string,
  email: string
}

export class CreateUserService {
  public execute({ nome, email }: IUsuario): Array<IUsuario> {
    const data: Array<IUsuario> = [];
    data.push({nome, email});
    return data;
  }
}