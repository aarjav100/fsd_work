const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product name is required'],
  },
  productCode: {
    type: String,
    required: [true, 'Product code is required'],
    unique: true,
  },
  category: {
    type: String,
  },
  supplierName: {
    type: String,
    required: [true, 'Supplier name is required'],
  },
  quantityInStock: {
    type: Number,
    default: 0,
    min: [0, 'Quantity in stock cannot be negative'],
  },
  unitPrice: {
    type: Number,
    required: [true, 'Unit price is required'],
    min: [0.01, 'Unit price must be greater than 0'],
  },
  reorderLevel: {
    type: Number,
    required: [true, 'Reorder level is required'],
    min: [1, 'Reorder level must be greater than 0'],
  },
  manufactureDate: {
    type: Date,
  },
  productType: {
    type: String,
    enum: ['Perishable', 'Non-Perishable'],
  },
  status: {
    type: String,
    default: 'Available',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);