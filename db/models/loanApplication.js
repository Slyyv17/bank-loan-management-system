"use strict"
import sequelize from "../../config/connectDb.js";
import { DataTypes, Model } from "sequelize";
import Loan from "./loan.js";
import LoanOfficer from "./loanofficer.js";
import Customer from "./Customer.js";

const LoanApplication = sequelize.define(
    "LoanApplication",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        customerId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Loan',
                key: 'id',
            }
        },
        loanId: {
            allowNull: false,
            type: DataTypes.INTEGER,
                references: {
                    model: 'Loan', // Name of the target table
                    key: 'id', // Key in the target table
                },
        },
        loanOfficerId: {
            allowNull: false,
            type: DataTypes.INTEGER,
                references: {
                    model: 'LoanOfficer', // Name of the target table
                    key: 'id', // Key in the target table
                },  
        },
        reviewDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Date is required",
                },
                notEmpty: {
                    msg: "Date is required",
                }
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Status is required",
                },
                notEmpty: {
                    msg: "Status is required",
                }
            }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        modelName: "LoanApplication",
        freezeTableName: true
    }
);

LoanApplication.hasMany(LoanApplication, {foreignKey: "customerId"})
LoanApplication.belongsTo(Customer, { foreignKey: "customerId" })

LoanApplication.hasMany(LoanApplication, {foreignKey: "loanOfficerId"})
LoanApplication.belongsTo(LoanOfficer, {foreignKey: "loanOfficerId"})

LoanApplication.hasMany(LoanApplication, {foreignKey: "loanId"})
LoanApplication.belongsTo(Loan, { foreignKey: "loanId" })

export default LoanApplication;