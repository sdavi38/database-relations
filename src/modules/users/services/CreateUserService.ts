import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  surname: string;
  roles: string;
  departament: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    surname,
    roles,
    departament,
    email,
    password,
  }: IRequest): Promise<User> {
    // verificação se há um email já cadastrado//

    const checkUserEmail = await this.userRepository.findByEmail(email);

    if (checkUserEmail) {
      throw new AppError('Email address already used.');
    }
    // codificando a senha//
    const passwordHash = await hash(password, 8);

    // adicionando no banco de dados//
    const user = await this.userRepository.create({
      name,
      surname,
      roles,
      departament,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
