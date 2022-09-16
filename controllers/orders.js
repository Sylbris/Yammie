import express from 'express'
import mongoose from 'mongoose'
import moment from 'moment'
import Order from '../models/order.js'

/**
 * post request to db
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const createOrder = async(req, res) => {
    // Load the request parameters.
    const { name, amount, address, payment, items } = req.body;

    // Create a new Schema, with the parameters.
    const newOrder = new Order( { name, amount, address, payment, items });

    try {
        await newOrder.save();

        res.status(200).json(newOrder);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

/**
 * Fetches all the orders in the collection,
 * allow from query parameter, if one wishes to pull
 * all orders from a certain date.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getOrders = async(req, res) => {
    try {
        // Get the date from which you wish to view the orders.
        const from = req.query.from;

        if(from){
            // get all records 
            const extReadings = await Order.find({ "dateOfOrder": { $gte: from } });
            res.status(200).json(extReadings);
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