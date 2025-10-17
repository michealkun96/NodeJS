import express, {Router} from 'express';
import createError from 'http-errors';

const router = express.Router() as Router;

let fake_customers = [
    {id: 1, name: "Quang Dinh"},
    {id: 2, name: "Nhat Hoang"},
    {id: 3, name: "Hoang Long"},
    {id: 4, name: "Khanh Linh"},
    {id: 5, name: "Cam Tu"},
    {id: 6, name: "Thanh Truc"},
]

//GET api/v1/customers ==> get all customers
router.get('/', (req, res) => {
    res.json({
        data: fake_customers
    })
})
//GET api/v1/customers/:id ==> get customers by id
router.get('/:id', (req, res) => {
    const {id} = req.params; //id nhận được luôn là string
    const customer = fake_customers.find((customer) => customer.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!customer) {
       throw createError(404, "customer not found")
    }
    res.json({
        data: customer
    })
})

//POST api/v1/customers ==> create new customers
router.post('/', (req, res) => {
   console.log('<===== req.body =====>', req.body);
   const newCustomer = {
    id: fake_customers.length + 1,
    name: req.body.name
   }
   fake_customers.push(newCustomer)
   //Note: Tạo mới thì status nên là 201
    res.status(201).json({
        data: newCustomer,
        categories: fake_customers
    })
})

//PUT api/v1/customers/:id ==> Update a customer
router.put('/:id',(req, res)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let customer = fake_customers.find(c => c.id === parseInt(id));
    if(!customer){
        throw createError(404, "product not found")
    }

    //Step 2: Xử lý khi có tồn tại
    customer = {...customer, name: req.body.name}

    res.json({
        data: customer
    })
})

//DELETE api/v1/customers/:id ==> Delete a customers by id
router.delete('/:id',(req, res)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let customer = fake_customers.find(c => c.id === parseInt(id));
    if(!customer){
        throw createError(404, "product not found")
    }
    //step2: Xoa neu co ton tai
    const results = fake_customers.filter(c => c.id !== parseInt(id))
    res.json({
        data: results
    })
})

export default router;