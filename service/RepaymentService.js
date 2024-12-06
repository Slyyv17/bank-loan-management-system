
import { Op, or } from 'sequelize';
import CustomError from "../errors/index.js"; 
import Repayment from '../db/models/Repayment.js';


const getAllRepayments = async (req, res) => {
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

    const repayments = await Repayment.findAll({
        where: queryObject,
        order,
        limit,
        offset: skip
    })


    return repayments;
}

const createRepayment = async (req, res) => {
    const { loanId, paymentDate, paymentAmount, paymentMethod, latePenalty } = req.body;

    if (!loanId || !paymentDate || !paymentAmount || !paymentMethod || !latePenalty) {
        throw new CustomError.BadRequestError('Data is not complete')
    }

    const repayment = await Repayment.create({
        loanId,
        paymentDate,
        paymentAmount,
        paymentMethod,
        latePenalty
    })

    return repayment;
}

export default {
    getAllRepayments,
    createRepayment
}