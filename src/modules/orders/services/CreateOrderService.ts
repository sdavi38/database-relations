import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const checkCustomer = await this.customersRepository.findById(customer_id);

    if (!checkCustomer) {
      throw new AppError('Customer not found');
    }

    const checkProducts = await this.productsRepository.findAllById(products);

    if (!checkProducts.length) {
      throw new AppError('Products not found');
    }

    const checkProductsIds = checkProducts.map(product => product.id);

    const checkInexistsProducts = products.filter(
      product => !checkProductsIds.includes(product.id),
    );

    if (checkInexistsProducts.length) {
      throw new AppError('At least one product was not found');
    }

    const checkQuantityProducts = products.filter(
      (product, index) => product.quantity > checkProducts[index].quantity,
    );

    if (checkQuantityProducts.length) {
      throw new AppError('At least one product has insufficient quantity');
    }

    const completeProducts = products.map((product, index) => ({
      product_id: product.id,
      quantity: product.quantity,
      price: checkProducts[index].price,
    }));

    const order = await this.ordersRepository.create({
      customer: checkCustomer,
      products: completeProducts,
    });

    const updatedQuantity = products.map((product, index) => ({
      id: product.id,
      quantity: checkProducts[index].quantity - product.quantity,
    }));

    await this.productsRepository.updateQuantity(updatedQuantity);

    return order;
  }
}

export default CreateOrderService;
