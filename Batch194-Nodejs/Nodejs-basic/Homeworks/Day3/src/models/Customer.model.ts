import {Schema, model} from 'mongoose'

const customerSchema = new Schema({
    customer_id: {
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
    zip_code: {
        type: String,
        require: false,
        maxLength: 5,
    },
    password: {
        type: String,
        require: false,
        maxLength: 255,
        default: null,
    },
}, {})

// Hash mật khẩu trước khi save vào DB
const bcrypt = require('bcrypt');

customerSchema.pre('save', async function(next) {
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
customerSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const Customer = model('Customer', customerSchema);
export default Customer