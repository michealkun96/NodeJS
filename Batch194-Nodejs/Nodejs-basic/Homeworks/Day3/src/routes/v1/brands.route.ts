import express, {Router} from 'express';
import createError from 'http-errors';
import { fake_brands } from '../../mockup/mockData';
import brandsControllers from '../../controllers/brands.controllers';
const router = express.Router() as Router;



//GET api/v1/brands ==> get all brands
router.get('/', brandsControllers.findAll)
//GET api/v1/brands/:id ==> get brand by id
router.get('/:id', brandsControllers.findById)

//POST api/v1/brands ==> create new brand
router.post('/', brandsControllers.create)

//PUT api/v1/brands/:id ==> Update a brand
router.put('/:id', brandsControllers.updateById)

//DELETE api/v1/brands/:id ==> Delete a brand by id
router.delete('/:id', brandsControllers.deleteById)

export default router;