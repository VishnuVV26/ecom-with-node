

const express = require('express');
const { createProduct, getProducts, getProductsById } = require("../controllers/productsController");

const productsRouter = express.Router();

productsRouter.post("/create/product", createProduct);
productsRouter.get("/allproducts", getProducts);
productsRouter.get("/products/:id", getProductsById);

module.exports = productsRouter