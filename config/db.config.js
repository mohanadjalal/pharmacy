module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "12312312",
    DB: "test_p",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };