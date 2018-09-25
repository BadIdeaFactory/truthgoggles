import http from 'http'
import express from 'express'
import dotenv from 'dotenv'

// Configure settings
dotenv.config()
const port = process.env.API_PORT || 3000

// Express app setup
const app = express()
const server = http.createServer(app)
server.listen(port)
server.on('listening', () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server is listening on port: ${port}`)
})
