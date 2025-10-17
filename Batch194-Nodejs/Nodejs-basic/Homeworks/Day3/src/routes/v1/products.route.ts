import express, {Router} from 'express';
import createError from 'http-errors';

const router = express.Router() as Router;

let fake_products = [
    {id: 1, name: "Iphone 17"},
    {id: 2, name: "Samsung Note 14"},
    {id: 3, name: "Oppo Neo"},
    {id: 4, name: "Nokia 12"},
    {id: 5, name: "Iphone 14"},
    {id: 6, name: "Iphone XS"},
]

//GET api/v1/products ==> get all brands
router.get('/', (req, res) => {
    res.json({
        data: fake_products
    })
})
//GET api/v1/products/:id ==> get category by id
router.get('/:id', (req, res) => {
    const {id} = req.params; //id nhận được luôn là string
    const product = fake_products.find((product) => product.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!product) {
       throw createError(404, "product not found")
    }
    res.json({
        data: product
    })
})

//POST api/v1/products ==> create new products
router.post('/', (req, res) => {
   console.log('<===== req.body =====>', req.body);
   const newProduct = {
    id: fake_products.length + 1,
    name: req.body.name
   }
   fake_products.push(newProduct)
   //Note: Tạo mới thì status nên là 201
    res.status(201).json({
        data: newProduct,
        categories: fake_products
    })
})

//PUT api/v1/products/:id ==> Update a products
router.put('/:id',(req, res)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let product = fake_products.find(p => p.id === parseInt(id));
    if(!product){
        throw createError(404, "product not found")
    }

    //Step 2: Xử lý khi có tồn tại
    product = {...product, name: req.body.name}

    res.json({
        data: product
    })
})

//DELETE api/v1/products/:id ==> Delete a products by id
router.delete('/:id',(req, res)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let product = fake_products.find(p => p.id === parseInt(id));
    if(!product){
        throw createError(404, "product not found")
    }
    //step2: Xoa neu co ton tai
    const results = fake_products.filter(p => p.id !== parseInt(id))
    res.json({
        data: results
    })
})

export default router;