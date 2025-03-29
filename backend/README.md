## Folder Structure

ecommerce-backend/
│-- node_modules/
│-- src/
│ │-- config/
│ │ ├── db.js # MongoDB connection setup
│ │-- models/
│ │ ├── User.js # User model
│ │ ├── Product.js # Product model
│ │-- routes/
│ │ ├── userRoutes.js # User-related routes
│ │ ├── productRoutes.js # Product-related routes
│ │-- controllers/
│ │ ├── userController.js
│ │ ├── productController.js
│ │-- middleware/
│ │ ├── authMiddleware.js # Middleware for authentication
│ │-- server.js # Main server file
│-- .env # Environment variables
│-- package.json
│-- README.md
