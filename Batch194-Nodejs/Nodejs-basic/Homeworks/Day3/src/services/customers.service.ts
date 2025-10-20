import { fake_customers } from "../mockup/mockData"
import createError from 'http-errors';
import {ICustomer , ICustomerDTO } from "../types/customers";

const findAll = () : ICustomer[]=>{
    return fake_customers
}

const findById = ({id}: {id: string}) : ICustomer =>{
    const customer = fake_customers.find((customer) => customer.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!customer) {
       throw createError(404, "customer not found")
    }
    return customer
}

const create =({name}: ICustomerDTO): ICustomer=>{
    const newCustomer = {
    id: fake_customers.length + 1,
    name,
    }
    fake_customers.push(newCustomer)
    return newCustomer
}

const updateById =({
    id,
    payload
}: {
    id: string,
    payload: Partial<ICustomerDTO>
}): ICustomer=>{
    //step1: Check xem trong db co ton tai record co id khong
    let customer = fake_customers.find(c => c.id === parseInt(id));
    if(!customer){
        throw createError(404, "Customer not found")
    }

    //Step 2: Xử lý khi có tồn tại
    if(payload.name)
    {
        customer = {...customer, name: payload.name}
    }
    return customer
}

const deleteById = (id: string): ICustomer=>{
    let customer = fake_customers.find(c => c.id === parseInt(id));
    if(!customer){
        throw createError(404, "Customer not found")
    }
    //step2: Xoa neu co ton tai
    //const results = fake_brands.filter(c => c.id !== parseInt(id))
    return customer
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}