import express, {Router} from 'express';
import createError from 'http-errors';
import ordersControllers from '../../controllers/orders.controllers';
const router = express.Router() as Router;


//GET api/v1/orders ==> get all orders
router.get('/', ordersControllers.findAll)
//GET api/v1/orders/:id ==> get order by id
router.get('/:id', ordersControllers.findById)

//POST api/v1/orders ==> create new order
router.post('/', ordersControllers.create)

//PUT api/v1/orders/:id ==> Update a order
router.put('/:id', ordersControllers.updateById)

//DELETE api/v1/orders/:id ==> Delete a order by id
router.delete('/:id', ordersControllers.deleteById)

export default router;