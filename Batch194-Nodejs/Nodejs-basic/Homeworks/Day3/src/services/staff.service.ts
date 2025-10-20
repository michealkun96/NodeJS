import { fake_staffs } from '../mockup/mockData';
import createError from 'http-errors';
import {IStaff, IStaffDTO } from '../types/staffs';

const findAll = () : IStaff[]=>{
    return fake_staffs
}

const findById = ({id}: {id: string}) : IStaff =>{
    const staff = fake_staffs.find((staff) => staff.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!staff) {
       throw createError(404, "Category not found")
    }
    return staff
}

const create =({name}: IStaffDTO): IStaff=>{
    const newStaff = {
    id: fake_staffs.length + 1,
    name,
    }
    fake_staffs.push(newStaff)
    return newStaff
}

const updateById =({
    id,
    payload
}: {
    id: string,
    payload: Partial<IStaffDTO>
}): IStaff=>{
    //step1: Check xem trong db co ton tai record co id khong
    let staff = fake_staffs.find(s => s.id === parseInt(id));
    if(!staff){
        throw createError(404, "Staff not found")
    }

    //Step 2: Xử lý khi có tồn tại
    if(payload.name)
    {
        staff = {...staff, name: payload.name}
    }
    return staff
}

const deleteById = (id: string): IStaff=>{
    let staff = fake_staffs.find(s => s.id === parseInt(id));
    if(!staff){
        throw createError(404, "Staff not found")
    }
    //step2: Xoa neu co ton tai
    //const results = fake_staffs.filter(c => c.id !== parseInt(id))
    return staff
}

export default {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}