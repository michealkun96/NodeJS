import { fake_orders } from "../mockup/mockData"
import createError from 'http-errors';
import {IOrder , IOrderDTO } from "../types/orders";

const findAll = () : IOrder[]=>{
    return fake_orders
}

const findById = ({id}: {id: string}) : IOrder =>{
    const order = fake_orders.find((order) => order.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!order) {
       throw createError(404, "Order not found")
    }
    return order
}

const create =({name, total}: IOrderDTO): IOrder=>{
    const newOrder = {
    id: fake_orders.length + 1,
    name,
    total
    }
    fake_orders.push(newOrder)
    return newOrder
}


const updateById =({
    id,
    payload
}: {
    id: string,
    payload: Partial<IOrderDTO>
}): IOrder=>{
    //step1: Check xem trong db co ton tai record co id khong
    let order = fake_orders.find(o => o.id === parseInt(id));
    if(!order){
        throw createError(404, "Order not found")
    }

    //Step 2: Xử lý khi có tồn tại
    if(payload.name)
    {
        order = {...order, name: payload.name}
    }
    return order
}

const deleteById = (id: string): IOrder=>{
    let order = fake_orders.find(o => o.id === parseInt(id));
    if(!order){
        throw createError(404, "Order not found")
    }
    //step2: Xoa neu co ton tai
    //const results = fake_orders.filter(o => o.id !== parseInt(id))
    return order
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}