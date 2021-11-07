const mongoose = require('mongoose')
//require ('dotenv').config()
//const config = require('../utils/config')

const blogSchema = new mongoose.Schema({
      title: String,
      author: String,
      url: String,
      likes: Number
    })

//const Blog = mongoose.model('Blog', blogSchema)



module.exports = mongoose.model("Blog",blogSchema)