import {Schema, model} from 'mongoose'
import mongoose from 'mongoose'

const order_itemSchema = new Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        require: true,
    },
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order-item',
        require: true,
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        require: true,
        default: 0,
        min: 0,
    },
    discount: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
        max: 70,
    }
},{})

const Order_item = model('Order_item', order_itemSchema);
export default Order_item;