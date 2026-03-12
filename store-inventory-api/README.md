# Store Inventory API

A simple REST API for managing store inventory using Node.js, Express, and MongoDB.

## Features

- Add, update, delete, and retrieve products
- MongoDB for data storage
- Express.js for routing
- Mongoose for MongoDB object modeling

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI and PORT
4. Run the server: `npm start` or `npm run dev` for development

## API Endpoints

- GET /api/products - Get all products
- GET /api/products/:id - Get a single product
- POST /api/products - Add a new product
- PUT /api/products/:id - Update a product
- DELETE /api/products/:id - Delete a product

## Environment Variables

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: Port number for the server (default: 3000)