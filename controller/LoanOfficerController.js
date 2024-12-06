import StatusCodes from 'http-status-codes';
import LoanOfficerService from '../service/LoanOfficerService.js';

const getAllLoanOfficers = async (req, res) => {
    return res
        .status(StatusCodes.OK)
        .json(
            await LoanOfficerService.getAllLoanOfficers(req, res)
        )
}

const createLoanOfficer = async (req, res) => {
    return res
        .status(StatusCodes.CREATED)
        .json(
            await LoanOfficerService.createLoanOfficer(req, res)
        )
}

export default {
    getAllLoanOfficers,
    createLoanOfficer
}