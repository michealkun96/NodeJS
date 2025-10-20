import { Request, Response } from "express"
import createError from 'http-errors';
import productsService from "../services/products.service";
import { sendJsonSuccess, SUCCESS } from "../helpers/responseHandler";

/** Get All products */
const findAll = (req: Request, res: Response)=>{
    const products = productsService.findAll();
    //res.json(products)
    sendJsonSuccess({
        res,
        data: products
    })
}

const findById = (req: Request, res: Response)=>{
    const {id} = req.params; //id nhận được luôn là string
        //Đảm bảo có id 
        if(!id){
            throw createError(400, "ID not found")
        }
    
        const product = productsService.findById({id})
        
        // res.status(200).json({
        //     data: product
        // })
        sendJsonSuccess({
            res,
            data: product
        })
}

const create = (req: Request, res:Response)=>{
    console.log('<===== req.body =====>', req.body);
    const newProduct = productsService.create({
        name: req.body.name
    });
   //Note: Tạo mới thì status nên là 201
    // res.status(201).json({
    //     data: newProduct,
    // })

    sendJsonSuccess({
        res,
        status: SUCCESS.CREATED,
        data: newProduct
    })
}

/* Update a product by Id */
const updateById = (req: Request, res:Response)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    
    const product = productsService.updateById({
        id,
        payload: {
            name: req.body.name
        }
    })

    res.json({
        data: product
    })
}

/* Delete a product by Id */
const deleteById = (req: Request, res:Response)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //Đảm bảo có id 
    if(!id){
        throw createError(400, "ID not found")
    }
    //step1: Check xem trong db co ton tai record co id khong
    const product = productsService.deleteById(id)
    res.json({
        data: product
    })
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}