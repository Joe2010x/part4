const blogsRouter = require("./controllers/blogs");
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./utils/config");
//const middleware = require("./utils/middleware");
//const logger = require("./utils/logger");
const mongoose = require("mongoose");

//logger.info("Connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter);

module.exports = app;