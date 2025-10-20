import express, {Router} from 'express';
import createError from 'http-errors';
import { fake_staffs } from '../../mockup/mockData';
import staffsControllers from '../../controllers/staffs.controllers';
const router = express.Router() as Router;


//GET api/v1/staffs ==> get all staffs
router.get('/', staffsControllers.findAll)
//GET api/v1/staffs/:id ==> get staff by id
router.get('/:id', staffsControllers.findById)

//POST api/v1/staffs ==> create new staff
router.post('/', staffsControllers.create)

//PUT api/v1/staffs/:id ==> Update a staff
router.put('/:id', staffsControllers.updateById)

//DELETE api/v1/staffs/:id ==> Delete a staff by id
router.delete('/:id', staffsControllers.deleteById)

export default router;