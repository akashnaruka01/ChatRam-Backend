const mongoose = require("mongoose");

module.exports = connectDb = () =>
  mongoose
    .connect(process.env.DB_URL)
    .then((data) =>
      console.log("database connected succesfully", data.connection.host)
    )
    .catch((error) => {
      console.log("Database Not Connected \n", error.message);
    });
