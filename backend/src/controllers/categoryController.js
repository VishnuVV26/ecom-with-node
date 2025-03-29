const Category = require("../models/Category");

const createCategory = async (req, res) => {
    const { catName, subCategories } = req.body;
    try {
        if (!catName) return res.status(400).json({ message: "Category Name is Required" });
        const exitsCategory = await Category.findOne({ catName });
        if (exitsCategory) {
            return res.status(400).json({ message: "Category is Already Created." })
        }

        const category = await new Category({ catName, subCategories });
        category.save();
        res.status(201).json({ message: "Category created successfully", category });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ categories })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const getOnecategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        }
        res.status(200).json(category)
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

module.exports = { createCategory, getCategories, getOnecategoryById }