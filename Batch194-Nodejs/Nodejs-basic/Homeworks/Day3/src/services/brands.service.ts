import { fake_brands } from "../mockup/mockData"
import createError from 'http-errors';
import {Ibrand , ICbrandDTO } from "../types/brands";

const findAll = () : Ibrand[]=>{
    return fake_brands
}

const findById = ({id}: {id: string}) : Ibrand =>{
    const brand = fake_brands.find((brand) => brand.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!brand) {
       throw createError(404, "Category not found")
    }
    return brand
}

const create =({name}: ICbrandDTO): Ibrand=>{
    const newBrand = {
    id: fake_brands.length + 1,
    name,
    }
    fake_brands.push(newBrand)
    return newBrand
}

const updateById =({
    id,
    payload
}: {
    id: string,
    payload: Partial<ICbrandDTO>
}): Ibrand=>{
    //step1: Check xem trong db co ton tai record co id khong
    let brand = fake_brands.find(c => c.id === parseInt(id));
    if(!brand){
        throw createError(404, "Category not found")
    }

    //Step 2: Xử lý khi có tồn tại
    if(payload.name)
    {
        brand = {...brand, name: payload.name}
    }
    return brand
}

const deleteById = (id: string): Ibrand=>{
    let brand = fake_brands.find(c => c.id === parseInt(id));
    if(!brand){
        throw createError(404, "brand not found")
    }
    //step2: Xoa neu co ton tai
    //const results = fake_brands.filter(c => c.id !== parseInt(id))
    return brand
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}