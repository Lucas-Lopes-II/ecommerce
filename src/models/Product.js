const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    productName: { type: String, required: true },

    productDescription: { type: String, default: '(No description)' },

    productQuantity: { type: Number, required: true },

    productImage: { type: String },

    productPrice: { type: Number, required: true },

    userName: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Product', Schema);