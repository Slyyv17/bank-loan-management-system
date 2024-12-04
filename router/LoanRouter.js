import express from 'express';
const router = express.Router();

import LoanController from '../controller/LoanController.js';

router.route('/')
    .get(LoanController.getAllCustomers)
    .post(LoanController.createCustomer)

export default router;