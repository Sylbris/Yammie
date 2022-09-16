import express from 'express'
import { getOrders, createOrder } from '../controllers/orders.js';

const router = express.Router();

// Get
router.get("/", getOrders);

// Post
router.post("/", createOrder);

export default router;