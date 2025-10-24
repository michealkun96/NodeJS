import {Schema, model} from 'mongoose';

// Đinh nghĩa cấu trúc của một collection

const strudentSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
}, {

})
const Student = model('Student', strudentSchema);
export default Student;