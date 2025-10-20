import express, {Router} from 'express';
import createError from 'http-errors';
import { fake_brands } from '../../mockup/mockData';
import brandsControllers from '../../controllers/brands.controllers';
const router = express.Router() as Router;



//GET api/v1/categories ==> get all categories
router.get('/', brandsControllers.findAll)
//GET api/v1/categories/:id ==> get category by id
router.get('/:id', brandsControllers.findById)

//POST api/v1/categories ==> create new category
router.post('/', brandsControllers.create)

//PUT api/v1/categories/:id ==> Update a category
router.put('/:id', brandsControllers.updateById)

//DELETE api/v1/categories/:id ==> Delete a category by id
router.delete('/:id', brandsControllers.deleteById)

export default router;