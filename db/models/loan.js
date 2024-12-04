"use strict"
import sequelize from "../../config/connectDb.js";
import { DataTypes, Model } from "sequelize";

const Loan = sequelize.define(
    "Loan",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        loanType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Loan type is required",
                },
                notEmpty: {
                    msg: "Loan type is required",
                }
            }
        },
        loanAmount: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Amount is required",
                },
                notEmpty: {
                    msg: "Amount is required",
                }
            }
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Purpose is required",
                },
                notEmpty: {
                    msg: "Purpose is required",
                }
            }
        },
        loanTerm: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Loan term is required",
                },
                notEmpty: {
                    msg: "Loan term is required",
                }
            }
        },
        interestRate: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "InterestRate is required",
                },
                notEmpty: {
                    msg: "InterestRate is required",
                }
            }
        },
        collateral: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Collateral is required",
                },
                notEmpty: {
                    msg: "Collateral is required",
                }
            }
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["pending", "approved", "unverified", "rejected"],
            defaultValue: "unverified"
        },
        approvedAmt: {
            allowNull: false,
            type: DataTypes.NUMBER,
            validate: {
              notNull: {
                  msg: "Approved amount is required",
              },
              notEmpty: {
                  msg: "Approved amount is required",
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
        modelName: "Loan",
        freezeTableName: true
    }
);

export default Loan;