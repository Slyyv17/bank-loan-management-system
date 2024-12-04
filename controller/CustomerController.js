import CustomerService from "../service/CustomerService.js";
import StatusCodes from 'http-status-codes';

const getAllCustomers = async (req, res) => { 
    return res
        .status(StatusCodes.OK)
        .json(
            await CustomerService.getAllCustomers(req, res)
        )
}

const createCustomer = async (req, res) => { 
    return res
        .status(StatusCodes.OK)
        .json(
            await CustomerService.createCustomer(req, res)
        )
}

export default {
    getAllCustomers,
    createCustomer
}
