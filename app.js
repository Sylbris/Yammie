import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import orderRoutes from './routes/orders.js'

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));

//Allow cross origin resource sharing.
app.use(cors());

//Set our orders route.
app.use('/orders', orderRoutes);

export default app