"use strict"
import sequelize from "../../config/connectDb.js";
import { DataTypes, Model } from "sequelize";
import Loan from "./loan.js";


const Repayment = sequelize.define(
    "Repayment",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        loanId: {
            allowNull: false,
            type: DataTypes.INTEGER,
                references: {
                    model: 'Loan', // Name of the target table
                    key: 'id', // Key in the target table
                },
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Payment Date is required",
                },
                notEmpty: {
                    msg: "Payment Date is required",
                }
            }
        },
        paymentAmount: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Payment Amount is required",
                },
                notEmpty: {
                    msg: "Payment Amount is required",
                }
            }
        },
        paymentMethod: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["card", "bank_transfer"]
        },
        latePenalty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: "Repayment",
        freezeTableName: true
    }
);

Repayment.hasMany(Repayment, {foreignKey: "loanId"})
Repayment.belongsTo(Loan, {foreignKey: "loanId"})

export default Repayment;