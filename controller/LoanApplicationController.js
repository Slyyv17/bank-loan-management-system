import StatusCodes from 'http-status-codes';
import LoanAppService from '../service/LoanAppService.js';

const getAllLoanApps = async (req, res) => {
    return res
        .status(StatusCodes.OK)
        .json(
            await LoanAppService.getAllLoanApps(req, res)
        )
}

const createLoanApp = async (req, res) => {
    return res
        .status(StatusCodes.CREATED)
        .json(
            await LoanAppService.createLoanApp(req, res)
        )
}

export default {
    getAllLoanApps,
    createLoanApp
}