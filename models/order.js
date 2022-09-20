import mongoose from "mongoose";

/**
 * @swagger
 * definitions:
 *   Order:
 *     type: object
 *     required:
 *       - id
 *       - customerName
 *       - amount
 *       - address
 *     properties:
 *       id:
 *         type: string
 *       customerName:
 *         type: string
 *       amount:
 *         type: number
 *       address:
 *         type: string
 *   Orders:
 *     type: object
 *     items:
 *       $ref: '#/definitions/Order'
 */
const orderSchema = mongoose.Schema({
    customerName: String,
    amount: String,
    address: String,
    paymentType: String,
    items: [Object],
    dateOfOrder: {
        type: Date,
        default: new Date(),
    },
})

var Order = mongoose.model('Order', orderSchema);

export default Order;