"use strict"
import sequelize from "../../config/connectDb.js";
import { DataTypes, Model } from "sequelize";
import Loan from "./loan.js";

const Compliance = sequelize.define(
    "Compliance",
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
        amlDoc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "AML Documentation is required",
                },
                notEmpty: {
                    msg: "AML Documentation is required",
                }
            }
        }, 
        taxReporting: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Tax Reporting is required",
                },
                notEmpty: {
                    msg: "Tax Reporting is required",
                }
            }
        }, 
        regulationStatus: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["pending", "approved", "rejected"]
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
        modelName: "Compliance",
        freezeTableName: true
    }
);

Compliance.hasMany(Compliance, {foreignKey: "loanId"})
Compliance.belongsTo(Loan, {foreignKey: "loanId"})


export default Compliance;