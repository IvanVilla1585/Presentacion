const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 8080

app.use(express.static('./public'))

server.listen(port, () => { console.log(`server listening in port ${port}`) })
