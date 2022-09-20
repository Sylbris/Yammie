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
    const { customerName, amount, address, paymentType, items } = req.body;

    // Check to see we're not missing a parameter.
    if( !customerName || !amount || !address || !paymentType || !items){
        res.status(400).json({ message: "missing parameter"});
    }

    

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

/**
 * Fetches all the orders in the collection,
 * allow from query parameter, if one wishes to pull
 * all orders from a certain date.
 * 
 * @param {*} req 
 * @param {*} res 
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