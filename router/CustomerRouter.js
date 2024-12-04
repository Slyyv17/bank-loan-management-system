import express from 'express';
const router = express.Router();

import CustomerController from '../controller/CustomerController.js';

router.route('/')
    .get(CustomerController.getAllCustomers)
    .post(CustomerController.createCustomer)

export default router;