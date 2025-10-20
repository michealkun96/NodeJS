import express, {Router} from 'express';
import createError from 'http-errors';
import { fake_customers } from '../../mockup/mockData';
import customersControllers from '../../controllers/customers.controllers';
const router = express.Router() as Router;


//GET api/v1/customers ==> get all customers
router.get('/', customersControllers.findAll)
//GET api/v1/customers/:id ==> get customers by id
router.get('/:id', customersControllers.findById)

//POST api/v1/customers ==> create new customers
router.post('/', customersControllers.create)

//PUT api/v1/customers/:id ==> Update a customer
router.put('/:id', customersControllers.updateById)

//DELETE api/v1/customers/:id ==> Delete a customers by id
router.delete('/:id', customersControllers.deleteById)

export default router;