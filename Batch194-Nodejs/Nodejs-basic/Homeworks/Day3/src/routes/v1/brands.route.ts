import express, {Router} from 'express';
import createError from 'http-errors';

const router = express.Router() as Router;

let fake_brands = [
    {id: 1, name: "Đống Đa"},
    {id: 2, name: "Nguyễn Chí Thanh"},
    {id: 3, name: "Nguyễn Văn Linh"},
    {id: 4, name: "Hùng Vương"},
    {id: 5, name: "Bạch Đằng"},
    {id: 6, name: "Lê Lợi"},
]

//GET api/v1/brands ==> get all brands
router.get('/', (req, res) => {
    res.json({
        data: fake_brands
    })
})
//GET api/v1/brands/:id ==> get brand by id
router.get('/:id', (req, res) => {
    const {id} = req.params; //id nhận được luôn là string
    const brand = fake_brands.find((brand) => brand.id === parseInt(id));
    //Phải kiểm tra xem có tồn tại thật không. Nếu không thì trả về 404.
    if (!brand) {
       throw createError(404, "brand not found")
    }
    res.json({
        data: brand
    })
})

//POST api/v1/brands ==> create new brands
router.post('/', (req, res) => {
   console.log('<===== req.body =====>', req.body);
   const newBrand = {
    id: fake_brands.length + 1,
    name: req.body.name
   }
   fake_brands.push(newBrand)
   //Note: Tạo mới thì status nên là 201
    res.status(201).json({
        data: newBrand,
        categories: fake_brands
    })
})

//PUT api/v1/brands/:id ==> Update a brands
router.put('/:id',(req, res)=>{
    console.log(req.params, req.body);
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let brand = fake_brands.find(c => c.id === parseInt(id));
    if(!brand){
        throw createError(404, "brand not found")
    }

    //Step 2: Xử lý khi có tồn tại
    brand = {...brand, name: req.body.name}

    res.json({
        data: brand
    })
})

//DELETE api/v1/brands/:id ==> Delete a brands by id
router.delete('/:id',(req, res)=>{
    //step1: check xem id co ton tai khong
    const {id} = req.params;
    //step1: Check xem trong db co ton tai record co id khong
    let brand = fake_brands.find(b => b.id === parseInt(id));
    if(!brand){
        throw createError(404, "brand not found")
    }
    //step2: Xoa neu co ton tai
    const results = fake_brands.filter(b => b.id !== parseInt(id))
    res.json({
        data: results
    })
})

export default router;