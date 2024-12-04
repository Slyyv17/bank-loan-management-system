"use strict"
import sequelize from "../../config/connectDb.js";
import { DataTypes, Model } from "sequelize";

const Customers = sequelize.define(
    "Customers",
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
            unique: true,
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
                    msg: "Phone Number is required",
                },
                notEmpty: {
                    msg: "Phone Number is required",
                }
            }
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Date of birth required",
                },
                notEmpty: {
                    msg: "Date of birth required",
                }
            }
        },
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Job Title is required",
                },
                notEmpty: {
                    msg: "Job Title  is required",
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
        modelName: "Customers",
        freezeTableName: true
    }
);

export default Customers;