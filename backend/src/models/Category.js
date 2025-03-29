const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    catName: { type: String, required: true, unique: true },
    subCategories: [{ type: String }]
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;