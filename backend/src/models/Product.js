const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    subcategory: { type: String },
    stock: { type: Number, default: 0 },
    images: [{ type: String }],
    color: { type: String },
    attributes: { type: Object, default: {} },
    createdAt: { type: Date, default: Date.now }
})
const Product = mongoose.model("Products", productSchema)
module.exports = Product;