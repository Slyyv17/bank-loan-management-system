import express from 'express';
const router = express.Router();

import RepaymentController from '../controller/RepaymentController.js';

router.route('/')
    .get(RepaymentController.getAllRepayments)
    .post(RepaymentController.createRepayment)

export default router;