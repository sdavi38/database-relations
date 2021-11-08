import { Router } from 'express';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import customersRouter from '@modules/customers/infra/http/routes/customers.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';

const routes = Router();
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/customers', customersRouter);
routes.use('/products', productsRouter);

routes.use('/orders', ordersRouter);

export default routes;
