import LoanService from "../service/LoanService.js";
import StatusCodes from 'http-status-codes';

const getAllLoans = async (req, res) => {
    return res
        .status(StatusCodes.OK)
        .json(
            await LoanService.getAllLoans(req, res)
        )
}

const createLoan = async (req, res) => {
    return res
        .status(StatusCodes.CREATED)
        .json(
            await LoanService.createLoan(req, res)
        )
}

export default {
    getAllLoans,
    createLoan
}