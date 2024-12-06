import CustomError from "../errors/index.js";
import { Op, or } from 'sequelize';
import LoanApplication from "../db/models/loanApplication.js";

const getAllLoanApps = async (req, res) => {
    let { sort, page, limit } = req.params;

    let order = [];
    let queryObject = {};

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

    const loanApps = await loanApps.findAll({
        where: queryObject,
        order,
        limit,
        offset: skip
    })


    return loanApps;
}

const createLoanApp = async (req, res) => {
    const { customerId, loanId, loanOfficerId, reviewDate, status } = req.body;

    
    if (!customerId || !loanId || !loanOfficerId || !reviewDate || !status ) {
        throw new CustomError.BadRequestError('Data is not complete')
    }

    const loanApp = await LoanApplication.create({
        customerId,
        loanId,
        loanOfficerId,
        reviewDate,
        status
    })

    return loanApp;
}

export default {
    getAllLoanApps,
    createLoanApp
}