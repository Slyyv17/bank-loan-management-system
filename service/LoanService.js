import Loan from '../db/models/loan.js';
import CustomError from "../errors/index.js";
import { Op, or } from 'sequelize';

const getAllLoans = async (req, res) => {
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

    const loans = await Loan.findAll({
        where: queryObject,
        order,
        limit,
        offset: skip
    })


    return loans;
}

const createLoan = async (req, res) => {
    const { loanType, loanAmount, purpose, loanTerm, interestRate, collateral, status, approvedAmt } = req.body;

    
    if (!loanType || !loanAmount || !purpose || !loanTerm || !interestRate || !collateral || !status || !approvedAmt) {
        throw new CustomError.BadRequestError('Data is not complete')
    }

    const loan = await Loan.create({
        loanType,
        loanAmount,
        purpose,
        loanTerm,
        interestRate,
        collateral,
        status,
        approvedAmt
    })

    return loan;
}

export default {
    getAllLoans,
    createLoan
}