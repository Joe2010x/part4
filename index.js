//const app = require('./app.js')
//const app = require('./app')
//const config = require('./utils/config')
const http = require('http')
const app = require('./jjapp')

//const app = require('./app')

// const config = require('./utils/config')
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const blogsRouter = require('./controllers/blogs')

// const mongoose = require('mongoose')

// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('connected to MongoDB')
//   })
//   .catch((error) => {
//     console.log('error connection to MongoDB:', error.message)
//   })

// app.use(cors())
// app.use(express.json())
// app.use('/api/blogs',blogsRouter)



const server = http.createServer(app)

const PORT = 3003
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })


