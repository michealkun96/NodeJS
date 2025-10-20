import express, {Router} from 'express';
import createError from 'http-errors';
import { fake_categories } from '../../mockup/mockData';
import categoriesControllers from '../../controllers/categories.controllers';
const router = express.Router() as Router;



//GET api/v1/categories ==> get all categories
router.get('/', categoriesControllers.findAll)
//GET api/v1/categories/:id ==> get category by id
router.get('/:id', categoriesControllers.findById)

//POST api/v1/categories ==> create new category
router.post('/', categoriesControllers.create)

//PUT api/v1/categories/:id ==> Update a category
router.put('/:id', categoriesControllers.updateById)

//DELETE api/v1/categories/:id ==> Delete a category by id
router.delete('/:id', categoriesControllers.deleteById)

export default router;