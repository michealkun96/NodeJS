import {Schema, model} from 'mongoose'

const categorySchema = new  Schema({
    category_id: {
        type: String,
        require: true,
    },
    category_name: {
        type: String,
        require: true,
        unique: true,
        MaxLength: 50,
    },
    description: {
        type: String,
        require: false,
        Maxlength: 500,
    },
    slug: {
        type: String,
        require: true,
        unique: true,
        Maxlength: 50,
    },
}, {
    timestamps: true,
}) 

// Tạo slug tự động trước khi lưu
const slugify = require('slugify');

categorySchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.category_name, {
      lower: true,       // viết thường
      strict: true,      // loại bỏ ký tự đặc biệt
      locale: 'vi'       // hỗ trợ tiếng Việt
    });
  }
  next();
});

const Category = model('Category', categorySchema);
export default Category;