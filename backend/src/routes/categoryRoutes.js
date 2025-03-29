const { createCategory, getCategories, getOnecategoryById } = require("../controllers/categoryController");

const express = require('express');

const categoryRouter = express.Router();

categoryRouter.post("/create/category", createCategory);
categoryRouter.get("/allCategories", getCategories);
categoryRouter.get("/categories/:id", getOnecategoryById);

module.exports = categoryRouter