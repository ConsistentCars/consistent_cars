// models/paymentModel.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: { type: String, required: true },
  razorpay_payment_id: { type: String, required: true },
  razorpay_signature: { type: String, required: true },
}, {
  timestamps: true,
});


const paymentModel = mongoose.model("payment", paymentSchema);
module.exports = paymentModel;