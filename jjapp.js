const blogsRouter = require("./controllers/blogs");
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./utils/config");
//const blogsRouter = require('./controllers/blogs')

const mongoose = require("mongoose");

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


console.log("write something here, hellos....");
app.use(cors());
//app.use(express.static("build"));
app.use(express.json());
//app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);


module.exports = app;