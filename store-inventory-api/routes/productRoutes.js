const express = require('express');
const {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByCategory,
} = require('../controllers/productController');

const router = express.Router();

// Routes
router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/category', getProductsByCategory);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;