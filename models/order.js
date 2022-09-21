import mongoose from "mongoose";

/**
 * @swagger
 * definitions:
 *   Order:
 *     type: object
 *     required:
 *       - customerName
 *       - amount
 *       - address
 *       - items
 *     properties:
 *       customerName:
 *         type: string
 *       amount:
 *         type: number
 *       address:
 *         type: string
 *       paymentType:
 *         type: string
 *       items:
 *         type: array
 *     example:
 *        customerName: James Bond
 *        amount: 85
 *        address: Zabotinsky 85, Ramat-gan
 *        paymentType: CARD
 *        items:
 *           - itemID: 1
 *             itemName: Pizza
 *             quantity: 4
 *           - itemID: 4
 *             itemName: Hamburger
 *             quantity: 2
 *   Orders:
 *     type: object
 *     items:
 *       $ref: '#/definitions/Order'
 */
const orderSchema = mongoose.Schema({
  customerName: String,
  amount: Number,
  address: String,
  paymentType: String,
  items: [Object],
  dateOfOrder: {
    type: Date,
    default: new Date(),
  },
});

var Order = mongoose.model("Order", orderSchema);

export default Order;
