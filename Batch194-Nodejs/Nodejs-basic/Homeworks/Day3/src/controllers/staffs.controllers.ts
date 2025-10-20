import { Request, Response } from "express"
import createError from 'http-errors';
import staffService from "../services/staff.service";
import { sendJsonSuccess, SUCCESS } from "../helpers/responseHandler";

/** Get All Staffs */
const findAll = (req: Request, res: Response)=>{
    const staff = staffService.findAll();
    //res.json(staffs)
    sendJsonSuccess({
        res,
        data: staff
    })
}

const findById = (req: Request, res: Response)=>{
    const {id} = req.params; //id nhận được luôn là string
        //Đảm bảo có id 
        if(!id){
            throw createError(400, "ID not found")
        }
    
        const staff = staffService.findById({id})
        
        // res.status(200).json({
        //     data: staff
        // })
        sendJsonSuccess({
            res,
            data: staff
        })
}

const create = (req: Request, res:Response)=>{
    console.log('<===== req.body =====>', req.body);
    const newStaff = staffService.create({
        name: req.body.name
    });
   //Note: Tạo mới thì status nên là 201
    // res.status(201).json({
    //     data: newStaff,
    // })

    sendJsonSuccess({
        res,
        status: SUCCESS.CREATED,
        data: newStaff
    })
}

/* Update a staff by Id */
const updateById = (req: Request, res:Response)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    
    const staff = staffService.updateById({
        id,
        payload: {
            name: req.body.name
        }
    })

    res.json({
        data: staff
    })
}

/* Delete a staff by Id */
const deleteById = (req: Request, res:Response)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    //step1: Check xem trong db co ton tai record co id khong
    const staff = staffService.deleteById(id)
    res.json({
        data: staff
    })
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}