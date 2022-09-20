import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import orderRoutes from './routes/orders.js'
import swaggerRoutes from './routes/swagger.js'

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));

//Allow cross origin resource sharing.
app.use(cors());

//Set our routes.
app.use('/orders', orderRoutes);
app.use('/api-docs', swaggerRoutes);

export default app