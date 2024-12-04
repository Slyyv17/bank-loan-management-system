import LoanService from "../service/LoanService.js";
import StatusCodes from 'http-status-codes';

const getAllCustomers = async (req, res) => {
    return res
        .status(StatusCodes.OK)
        .json(
            await LoanService.getAllLoans(req, res)
        )
}

const createCustomer = async (req, res) => {
    return res
        .status(StatusCodes.CREATED)
        .json(
            await LoanService.createLoan(req, res)
        )
}

export default {
    getAllCustomers,
    createCustomer
}