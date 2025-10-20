import { fake_products } from "../mockup/mockData"
import createError from 'http-errors';
import {IProduct , IProductsDTO } from "../types/products";

const findAll = () : IProduct[]=>{
    return fake_products
}

const findById = ({id}: {id: string}) : IProduct =>{
    const product = fake_products.find((product) => product.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!product) {
       throw createError(404, "Product not found")
    }
    return product
}

const create =({name}: IProductsDTO): IProduct=>{
    const newProduct = {
    id: fake_products.length + 1,
    name,
    }
    fake_products.push(newProduct)
    return newProduct
}

const updateById =({
    id,
    payload
}: {
    id: string,
    payload: Partial<IProductsDTO>
}): IProduct=>{
    //step1: Check xem trong db co ton tai record co id khong
    let product = fake_products.find(p => p.id === parseInt(id));
    if(!product){
        throw createError(404, "Product not found")
    }

    //Step 2: Xử lý khi có tồn tại
    if(payload.name)
    {
        product = {...product, name: payload.name}
    }
    return product
}

const deleteById = (id: string): IProduct=>{
    let product = fake_products.find(p => p.id === parseInt(id));
    if(!product){
        throw createError(404, "Product not found")
    }
    //step2: Xoa neu co ton tai
    //const results = fake_products.filter(p => p.id !== parseInt(id))
    return product
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}