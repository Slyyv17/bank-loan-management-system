import dotenv from 'dotenv';
dotenv.config();

import "express-async-errors";

import path from 'path';
import url from 'url';
import express from 'express';
const app = express();

import connectDb from './config/connectDb.js';

import morgan from 'morgan';
import cors from 'cors';

import CustomerRouter from './router/CustomerRouter.js';
import LoanRouter from './router/LoanRouter.js'

import ErrorHandlerMiddleware from './middleware/error-handler.js';
import NotFoundMiddleware from './middleware/not-found.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("trust proxy", 1);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './frontend/dist')));

app.use('/api/customers', CustomerRouter);
app.use('/api/loan', LoanRouter);

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => { 
    try {
        await connectDb.sync();
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start()