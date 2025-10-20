import { Request, Response } from "express"
import createError from 'http-errors';
import brandsService from "../services/brands.service";
import { sendJsonSuccess, SUCCESS } from "../helpers/responseHandler";

/** Get All Categories */
const findAll = (req: Request, res: Response)=>{
    const brands = brandsService.findAll();
    //res.json(brands)
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
    
        const brand = brandsService.findById({id})
        
        // res.status(200).json({
        //     data: brand
        // })
        sendJsonSuccess({
            res,
            data: brand
        })
}

const create = (req: Request, res:Response)=>{
    console.log('<===== req.body =====>', req.body);
    const newBrand = brandsService.create({
        name: req.body.name
    });
   //Note: Tạo mới thì status nên là 201
    // res.status(201).json({
    //     data: newBrand,
    // })

    sendJsonSuccess({
        res,
        status: SUCCESS.CREATED,
        data: newBrand
    })
}

/* Update a brand by Id */
const updateById = (req: Request, res:Response)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    
    const brand = brandsService.updateById({
        id,
        payload: {
            name: req.body.name
        }
    })

    res.json({
        data: brand
    })
}

/* Delete a brand by Id */
const deleteById = (req: Request, res:Response)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    //step1: Check xem trong db co ton tai record co id khong
    const brand = brandsService.deleteById(id)
    res.json({
        data: brand
    })
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}