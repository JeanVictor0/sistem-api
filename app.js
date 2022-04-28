const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cpuRoutes = require('./routes/cpu')
const log = require('logger')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',cpuRoutes)

const server = app.listen(3000, ()=> {
    console.log('Servidor aberto na http://localhost:3000')
})

server.on('error', (err) => console.log(err))




