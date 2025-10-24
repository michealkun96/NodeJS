import {Schema, model, now} from 'mongoose'
import mongoose from 'mongoose'

const orderSchema = new Schema({
    order_id: {
        type: String,
        require: true,
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        require: true,
    },
    order_status: {
        type: Number,
        enum: [1,2,3,4], // 1 = Pending, 2 = Processing, 3 = Rejected, 4 = Completed
        default: 1, 
        require: true, 
    },
    order_date: {
        type: Date,
        require: true,
        default: Date.now,
        maxLength: 50,
    },
    require_date: {
        type: Date,
        require: false,
    },
    shipping_date: {
        type: Date,
        require: false,
    },
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        require: true,
        maxLength: 20,
    },
    order_note: {
        type: String,
        require: false,
    },
    street: {
        type: String,
        require: true,
        maxLength: 255,
    },
    city: {
        type: String,
        require: true,
        maxLength: 50,
    },
    state: {
        type: String,
        require: true,
        maxLength: 50,
    },
    payment_type: {
        type: Number,
        enum: [1,2,3,4], //1 = COD; 2 = Credit; 3 = ATM; 4 = Cash
        require: true,
    }
},{})

const Order = model('Order', orderSchema);
export default Order;