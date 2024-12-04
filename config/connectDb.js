import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const env = process.env.NODE_ENV || "development";
import config from "./config.js";

const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
    host: config[env].host,
    dialect: config[env].dialect,
    port: config[env].port
});

export default sequelize;