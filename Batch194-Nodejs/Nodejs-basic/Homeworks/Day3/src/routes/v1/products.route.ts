import express, {Router} from 'express';
import createError from 'http-errors';
import productsControllers from '../../controllers/products.controllers';
const router = express.Router() as Router;


//GET api/v1/products ==> get all brands
router.get('/', productsControllers.findAll)
//GET api/v1/products/:id ==> get category by id
router.get('/:id', productsControllers.findById)

//POST api/v1/products ==> create new products
router.post('/', productsControllers.create)

//PUT api/v1/products/:id ==> Update a products
router.put('/:id', productsControllers.updateById)

//DELETE api/v1/products/:id ==> Delete a products by id
router.delete('/:id', productsControllers.deleteById)

export default router;