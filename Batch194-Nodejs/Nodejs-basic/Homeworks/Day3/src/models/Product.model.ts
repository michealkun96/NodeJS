import {Schema, model} from 'mongoose'
import mongoose from 'mongoose'

const productSchema = new Schema({
    product_id: {
        type: String,
        require: true,
    },
    product_name: {
        type: String,
        require: true,
        unique: true,
        maxLength: 255,
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
        min: 0,
    },
    discount: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0,
        min: 0,
        max: 70,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        require: true,
    },
    description: {
        type: String,
        require: false,
        maxLength: 16000000,
        default: null,
    },
    model_year: {
        type: String,
        require: true,     
    },
    slug: {
        type: String,
        maxLength: 255,
        default: null,
        unique: true,
    },
    thumbnail: {
        type: String,
        require: false,
        maxLength: 255,
    },
    stock: {
        type: Number,
        require: true,
        maxLength: 5,
        default: 0,
        min: 0,
    },
},{})

const Product = model('Product', productSchema);
export default Product