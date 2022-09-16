import mongoose from "mongoose";

/**
 * A simple schema to represent the orders.
 */
const orderSchema = mongoose.Schema({
    name: String,
    amount: String,
    address: String,
    payment: String,
    items: [Object],
    dateOfOrder: {
        type: Date,
        default: new Date(),
    },
})

var Order = mongoose.model('Order', orderSchema);

export default Order;