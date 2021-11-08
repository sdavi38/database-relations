import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  cod: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    cod,
    name,
    price,
    quantity,
    description,
  }: IRequest): Promise<Product> {
    const checkProductName = await this.productsRepository.findByName(name);

    if (checkProductName) {
      throw new AppError('Product Name already used');
    }

    const product = await this.productsRepository.create({
      cod,
      name,
      price,
      quantity,
      description,
    });

    return product;
  }
}

export default CreateProductService;
