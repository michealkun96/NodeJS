import { Request, Response } from "express"
import createError from 'http-errors';
import customersService from "../services/customers.service";
import { sendJsonSuccess, SUCCESS } from "../helpers/responseHandler";

/** Get All customers */
const findAll = (req: Request, res: Response)=>{
    const brands = customersService.findAll();
    //res.json(customer)
    sendJsonSuccess({
        res,
        data: brands
    })
}

const findById = (req: Request, res: Response)=>{
    const {id} = req.params; //id nhận được luôn là string
        //Đảm bảo có id 
        if(!id){
            throw createError(400, "ID not found")
        }
    
        const customer = customersService.findById({id})
        
        // res.status(200).json({
        //     data: customer
        // })
        sendJsonSuccess({
            res,
            data: customer
        })
}

const create = (req: Request, res:Response)=>{
    console.log('<===== req.body =====>', req.body);
    const newCustomer = customersService.create({
        name: req.body.name
    });
   //Note: Tạo mới thì status nên là 201
    // res.status(201).json({
    //     data: newCustomer,
    // })

    sendJsonSuccess({
        res,
        status: SUCCESS.CREATED,
        data: newCustomer
    })
}

/* Update a customer by Id */
const updateById = (req: Request, res:Response)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    
    const customer = customersService.updateById({
        id,
        payload: {
            name: req.body.name
        }
    })

    res.json({
        data: customer
    })
}

/* Delete a customer by Id */
const deleteById = (req: Request, res:Response)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    //step1: Check xem trong db co ton tai record co id khong
    const customer = customersService.deleteById(id)
    res.json({
        data: customer
    })
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}