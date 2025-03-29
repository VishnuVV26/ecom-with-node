const Product = require("../models/Product");


const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, stock, images, color, attributes, createdAt } = req.body;
        if (!name || !price || !category) return res.status(400).json({ message: "Name,Price and Category are Required" });

        const product = new Product({
            name,
            description,
            price,
            category,
            subcategory: subcategory || null,
            stock,
            images,
            color,
            attributes: attributes || {},
            createdAt,
        })
        await product.save();
        res.status(201).json({ message: "Product Created successfully", product })
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category', 'name')
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category', 'name');
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

module.exports = { createProduct, getProducts, getProductsById };