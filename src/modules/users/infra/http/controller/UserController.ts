import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';

import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, surname, roles, departament, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      surname,
      roles,
      departament,
      email,
      password,
    });

    return response.json(user);
  }
}
