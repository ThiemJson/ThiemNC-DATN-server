const dbConnection = require("./config/db.config.js");

const getAllUser = async () => {
  dbConnection.query(query, (err, result) => {
    if (err) {
      res.status(400).json({
        data: null,
      });
      throw err;
    }

    let dataResponse = {
      count: result.lenght,
      status: 0,
      data: result.map((item) => item),
    };

    res.status(200).send(JSON.stringify(dataResponse));
  });
};
