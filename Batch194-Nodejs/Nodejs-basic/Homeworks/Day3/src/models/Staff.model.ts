import {Schema, model} from 'mongoose'
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const staffSchema = new Schema({
    staff_id:{
        type: String,
        require: true,
    },
    first_name: {
        type: String,
        require: true,
        maxLength: 50,
    },
    last_name: {
        type: String,
        require: true,
        maxLength: 50,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        maxLength: 50,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        maxLength: 150,
    },
    active: {
        type: Number,
        enum: [0, 1], // 0 = inactive, 1 = active
        default: 0
    },
    store_id: {
        type: mongoose.Schema.Types.ObjectId,  // tham chiếu ObjectId của stores
        ref: 'Store',                          // tên model Store
        required: true                         // bắt buộc phải có store_id        
    },
    manage_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true,
    },
    password: {
        type: String,
        require: true,
        maxLength: 255,
    },
},{
    timestamps: true,
})

// Hash mật khẩu trước khi save vào DB
staffSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Nếu password không đổi thì bỏ qua

  try {
    const salt = await bcrypt.genSalt(10); // tạo salt
    this.password = await bcrypt.hash(this.password, salt); // hash password
    next();
  } catch (error) {
    next(this.errors);
  }
});

// Method so sánh password khi login
staffSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const Staff = model('Staff', staffSchema);
export default Staff;