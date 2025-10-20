import { Request, Response } from "express"
import createError from 'http-errors';
import ordersService from "../services/orders.service";
import { sendJsonSuccess, SUCCESS } from "../helpers/responseHandler";

/** Get All orders */
const findAll = (req: Request, res: Response)=>{
    const orders = ordersService.findAll();
    //res.json(orders)
    sendJsonSuccess({
        res,
        data: orders
    })
}

const findById = (req: Request, res: Response)=>{
    const {id} = req.params; //id nhận được luôn là string
        //Đảm bảo có id 
        if(!id){
            throw createError(400, "ID not found")
        }
    
        const order = ordersService.findById({id})
        
        // res.status(200).json({
        //     data: order
        // })
        sendJsonSuccess({
            res,
            data: order
        })
}

const create = (req: Request, res:Response)=>{
    console.log('<===== req.body =====>', req.body);
    const newOrder = ordersService.create({
        name: req.body.name,
        total: req.body.total
    });
   //Note: Tạo mới thì status nên là 201
    // res.status(201).json({
    //     data: newOrder,
    // })

    sendJsonSuccess({
        res,
        status: SUCCESS.CREATED,
        data: newOrder
    })
}

/* Update a order by Id */
const updateById = (req: Request, res:Response)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    
    const order = ordersService.updateById({
        id,
        payload: {
            name: req.body.name
        }
    })

    res.json({
        data: order
    })
}

/* Delete a order by Id */
const deleteById = (req: Request, res:Response)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    //step1: Check xem trong db co ton tai record co id khong
    const order = ordersService.deleteById(id)
    res.json({
        data: order
    })
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}