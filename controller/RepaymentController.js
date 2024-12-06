import StatusCodes from 'http-status-codes';
import RepaymentService from '../service/RepaymentService.js';

const getAllRepayments = async (req, res) => {
    return res
        .status(StatusCodes.OK)
        .json(
            await RepaymentService.getAllRepayments(req, res)
        )
}

const createRepayment = async (req, res) => {
    return res
        .status(StatusCodes.CREATED)
        .json(
            await RepaymentService.createRepayment(req, res)
        )
}

export default {
    getAllRepayments,
    createRepayment
}