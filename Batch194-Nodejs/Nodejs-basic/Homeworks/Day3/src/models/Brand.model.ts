import { request } from 'https'
import {Schema, model} from 'mongoose'

const brandSchema = new Schema({
    brand_id:{
        type: String,
        require: true,
    },
    brand_name: {
        type: String,
        require: true,
        maxLength: 100,
        unique: true,
    },
    description: {
        type: String,
        require: false,
        maxLength: 500,
    },
    slug: {
        type: String,
        require: true,
        maxLength: 100,
        unique: true,
    },
},{})

// Tạo slug tự động trước khi lưu
const slugify = require('slugify');

brandSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.brand_name, {
      lower: true,       // viết thường
      strict: true,      // loại bỏ ký tự đặc biệt
      locale: 'vi'       // hỗ trợ tiếng Việt
    });
  }
  next();
});

const Brand = model("Brand", brandSchema);
export default Brand