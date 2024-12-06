
import { Op, or } from 'sequelize';
import CustomError from "../errors/index.js"; 
import LoanOfficer from '../db/models/loanofficer.js';


const getAllLoanOfficers = async (req, res) => {
    let { search, sort, page, limit } = req.params;

    let order = [];
    let queryObject = {};

    if (search) {
        queryObject.name = { [Op.iLike]: `%${search}%` };
    }

    if (sort == "latest") {
        order = [...order, ["createdAt", "DESC"]]
    }

    if (sort == "earliest") {
        order = [...order, ["createdAt", "ASC"]]
    }

    if (sort == "a-z") {
        order = [...order, ["name", "ASC"]]
    }

    if (sort == "z-a") {
        order = [...order, ["name", "DESC"]]
    }

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 20;
    const skip = (page - 1) * limit;

    const loanOfficers = await LoanOfficer.findAll({
        where: queryObject,
        order,
        limit,
        offset: skip
    })


    return loanOfficers;
}

const createLoanOfficer = async (req, res) => {
    const { name, phoneNumber } = req.body;

    if (!name || !phoneNumber) {
        throw new CustomError.BadRequestError('Data is not complete')
    }

    const loanOfficer = await LoanOfficer.create({
        name,
        phoneNumber,
    })

    return loanOfficer;
}

export default {
    getAllLoanOfficers,
    createLoanOfficer
}