import Sequelize from "sequelize";

let sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
