import { Op, or } from 'sequelize';
import Customer from '../db/models/Customer.js';
import CustomError from "../errors/index.js";


const getAllCustomers = async (req, res) => {
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

    const customers = await Customer.findAll({
        where: queryObject,
        order,
        limit,
        offset: skip
    })


    return customers;
}

const createCustomer = async (req, res) => {
    const { name, phoneNumber, dob, jobTitle } = req.body;

    if (!name || !phoneNumber || !dob || !jobTitle) {
        throw new CustomError.BadRequestError('Data is not complete')
    }

    const customer = await Customer.create({
        name,
        phoneNumber,
        dob,
        jobTitle
    })

    return customer;
}

export default {
    getAllCustomers,
    createCustomer
}