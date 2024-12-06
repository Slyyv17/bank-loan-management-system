import express from 'express';
const router = express.Router();

import LoanController from '../controller/LoanController.js';

router.route('/')
    .get(LoanController.getAllLoans)
    .post(LoanController.createLoan)

export default router;