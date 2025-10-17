import  express, {Express, NextFunction, Response, Request} from 'express';
import categoriesRoute from './routes/v1/categories.route';
import brandsRoute from './routes/v1/brands.route';
import productsRoute from './routes/v1/products.route';
import customersRoute from './routes/v1/customers.route';
import ordersRoute from './routes/v1/orders.route';
import staffsRoute from './routes/v1/staffs.route';
import createError, {HttpError } from 'http-errors';
import { ENV } from './config/ENV';

const app: Express = express()

/**Cấu hình để nhận request từ Body */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome NodeJS'
  })
})

/*********** BEGIN DECLARATION ROUTES (categories) **************** */
app.use('/api/v1/categories', categoriesRoute);
/************END DECLARATION ROUTES********** */

/*********** BEGIN DECLARATION ROUTES (brands) **************** */
app.use('/api/v1/brands', brandsRoute);
/************END DECLARATION ROUTES********** */

/*********** BEGIN DECLARATION ROUTES (products) **************** */
app.use('/api/v1/products', productsRoute);
/************END DECLARATION ROUTES********** */

/*********** BEGIN DECLARATION ROUTES (customers) **************** */
app.use('/api/v1/customers', customersRoute);
/************END DECLARATION ROUTES********** */

/*********** BEGIN DECLARATION ROUTES (orders) **************** */
app.use('/api/v1/orders', ordersRoute);
/************END DECLARATION ROUTES********** */

/*********** BEGIN DECLARATION ROUTES (staffs) **************** */
app.use('/api/v1/staffs', staffsRoute);
/************END DECLARATION ROUTES********** */

/*********** BEGIN HANDLE ERRORS **************** */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = ENV.NODE_ENV === 'development' ? err : {};

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});

/** App chỉ chứa phần cấu hình epxress */
export default app;