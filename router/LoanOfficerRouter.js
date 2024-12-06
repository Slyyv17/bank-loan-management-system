import express from 'express';
const router = express.Router();

import LoanOfficerController from '../controller/LoanOfficerController.js';

router.route('/')
    .get(LoanOfficerController.getAllLoanOfficers)
    .post(LoanOfficerController.createLoanOfficer)

export default router;