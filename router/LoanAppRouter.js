import express from 'express';
const router = express.Router();

import LoanApplicationController from '../controller/LoanApplicationController.js';

router.route('/')
    .get(LoanApplicationController.getAllLoanApps)
    .post(LoanApplicationController.createLoanApp)

export default router;