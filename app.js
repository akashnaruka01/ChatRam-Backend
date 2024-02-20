const express = require("express");
const app = express();
const connectDb = require("./Config/databaseConnection");

require("dotenv").config({ path: "Config/config.env" }); // To embed config.env

connectDb();

// routes import
const userRouter = require("./routes/userRoutes");

// middlewares
app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT; // creating server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// express does not parse or process the data into json format thats why we use middleware body-parser.
