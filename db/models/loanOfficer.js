"use strict"
import sequelize from "../../config/connectDb.js";
import { DataTypes, Model } from "sequelize";

const LoanOfficer = sequelize.define(
    "LoanOfficer",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: "Name is required",
                },
                notEmpty: {
                    msg: "Name is required",
                },
                len: {
                    args: [3, 255],
                    msg: "Name should be between 3 and 255 characters",
                },
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Name is required",
                },
                notEmpty: {
                    msg: "Name is required",
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
        modelName: "LoanOfficer",
        freezeTableName: true
    }
);

export default LoanOfficer;