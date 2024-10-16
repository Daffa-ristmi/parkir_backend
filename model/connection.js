import { Sequelize } from "sequelize";

const connection = new Sequelize ("parking", "root", "Ja4nganlup4", {
    host: "localhost",
    dialect: "mysql"
})

export default connection;