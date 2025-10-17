import express, {Router} from 'express';
import createError from 'http-errors';

const router = express.Router() as Router;

let fake_orders = [
    {id: 1, name: "Đơn đặt hàng 1", total: "20000"},
    {id: 2, name: "Đơn đặt hàng 2", total: "30000"},
    {id: 3, name: "Đơn đặt hàng 3", total: "40000"},
    {id: 4, name: "Đơn đặt hàng 4", total: "50000"},
    {id: 5, name: "Đơn đặt hàng 5", total: "60000"},
    {id: 6, name: "Đơn đặt hàng 6", total: "70000"},
]

//GET api/v1/orders ==> get all orders
router.get('/', (req, res) => {
    res.json({
        data: fake_orders
    })
})
//GET api/v1/orders/:id ==> get order by id
router.get('/:id', (req, res) => {
    const {id} = req.params; //id nhận được luôn là string
    const order = fake_orders.find((order) => order.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!order) {
       throw createError(404, "order not found")
    }
    res.json({
        data: order
    })
})

//POST api/v1/orders ==> create new order
router.post('/', (req, res) => {
   console.log('<===== req.body =====>', req.body);
   const newOrder = {
    id: fake_orders.length + 1,
    name: req.body.name,
    total: req.body.total
   }
   fake_orders.push(newOrder)
   //Note: Tạo mới thì status nên là 201
    res.status(201).json({
        data: newOrder,
        categories: fake_orders
    })
})

//PUT api/v1/orders/:id ==> Update a order
router.put('/:id',(req, res)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let order = fake_orders.find(o => o.id === parseInt(id));
    if(!order){
        throw createError(404, "product not found")
    }

    //Step 2: Xử lý khi có tồn tại
    order = {...order, name: req.body.name, total: req.body.total}

    res.json({
        data: order
    })
})

//DELETE api/v1/orders/:id ==> Delete a order by id
router.delete('/:id',(req, res)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let order = fake_orders.find(o => o.id === parseInt(id));
    if(!order){
        throw createError(404, "product not found")
    }
    //step2: Xoa neu co ton tai
    const results = fake_orders.filter(o => o.id !== parseInt(id))
    res.json({
        data: results
    })
})

export default router;