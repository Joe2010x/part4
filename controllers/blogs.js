const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

console.log("controller is called")
blogsRouter.get('/', (request, response) => {
    console.log("the get is called!, get router")
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)

      })
  })
  
  blogsRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })
  
module.exports = blogsRouter