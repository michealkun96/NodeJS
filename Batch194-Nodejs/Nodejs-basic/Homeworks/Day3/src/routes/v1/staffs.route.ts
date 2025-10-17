import express, {Router} from 'express';
import createError from 'http-errors';

const router = express.Router() as Router;

let fake_staffs = [
    {id: 1, name: "Nhân viên 1"},
    {id: 2, name: "Nhân viên 2"},
    {id: 3, name: "Nhân viên 3"},
    {id: 4, name: "Nhân viên 4"},
    {id: 5, name: "Nhân viên 5"},
    {id: 6, name: "Nhân viên 6"},
]

//GET api/v1/staffs ==> get all staffs
router.get('/', (req, res) => {
    res.json({
        data: fake_staffs
    })
})
//GET api/v1/staffs/:id ==> get staff by id
router.get('/:id', (req, res) => {
    const {id} = req.params; //id nhận được luôn là string
    const staff = fake_staffs.find((staff) => staff.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!staff) {
       throw createError(404, "order not found")
    }
    res.json({
        data: staff
    })
})

//POST api/v1/staffs ==> create new staff
router.post('/', (req, res) => {
   console.log('<===== req.body =====>', req.body);
   const newStaff = {
    id: fake_staffs.length + 1,
    name: req.body.name,
   }
   fake_staffs.push(newStaff)
   //Note: Tạo mới thì status nên là 201
    res.status(201).json({
        data: newStaff,
        categories: fake_staffs
    })
})

//PUT api/v1/staffs/:id ==> Update a staff
router.put('/:id',(req, res)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let staff = fake_staffs.find(s => s.id === parseInt(id));
    if(!staff){
        throw createError(404, "product not found")
    }

    //Step 2: Xử lý khi có tồn tại
    staff = {...staff, name: req.body.name}

    res.json({
        data: staff
    })
})

//DELETE api/v1/staffs/:id ==> Delete a staff by id
router.delete('/:id',(req, res)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let staff = fake_staffs.find(s => s.id === parseInt(id));
    if(!staff){
        throw createError(404, "product not found")
    }
    //step2: Xoa neu co ton tai
    const results = fake_staffs.filter(s => s.id !== parseInt(id))
    res.json({
        data: results
    })
})

export default router;