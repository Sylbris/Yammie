import express from 'express'
import mongoose from 'mongoose'
import moment from 'moment'
import Order from '../models/order.js'

/**
 * @swagger
 * /orders:
 *   post:
 *     description: Create a new order
 *     tags:
 *       - orders
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: order
 *         description: Order object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Order'
 *     responses:
 *       200:
 *         description: new order
 *         schema:
 *           $ref: '#/definitions/Order'
 */
export const createOrder = async(req, res) => {
    // Load the request parameters.
    const { customerName, amount, address, paymentType, items } = req.body;

    // Check to see we're not missing a parameter.
    if( !customerName || !amount || !address || !paymentType || !items || amount < 0){
        res.status(400).json({ message: "missing parameter"});
    }
    else {
        // Create a new Schema, with the parameters.
        const newOrder = new Order( { customerName, amount, address, paymentType, items });

        try {
            await newOrder.save();

            res.status(200).json(newOrder);
        }
        catch(error){
            res.status(400).json({ message: error.message});
        }
    }
}

/**
 * @swagger
 * /orders:
 *   get:
 *     description: Retrieve the full list of orders
 *     tags:
 *       - orders
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: from
 *         in: query
 *         type: string
 *         format: date
 *         description: the date from which you wish to view the orders
 *         examples: 
 *            YYYY-MM-DD:
 *             value:
 *              /orders?from=2022-09-20
 *            YYYY-MM-DD'T'HH:MM:SS:
 *             value:
 *              /orders?from=2022-09-20T09:21:05.910Z
 *     responses:
 *       200:
 *         description: successfully added the order
 *         schema:
 *           $ref: '#/definitions/Orders'
 *       400:
 *         description: bad date format
 */
export const getOrders = async(req, res) => {
    const from = req.query.from;

    try {

        if(from){
            // Parse date
            const dateParsed = moment(from);
            dateParsed.format();

            // get all records 
            const order = await Order.find({ "dateOfOrder": { $gte: dateParsed } });
            res.status(200).json(order);
        }
        else {
            const order = await Order.find();
            res.status(200).json(order);
        }

    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}