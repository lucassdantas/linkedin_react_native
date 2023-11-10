let accessInfo = require('./accessInfo.js')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

console.log(accessInfo)
mongoose.connect(`mongodb+srv://${accessInfo.email}:${accessInfo.password}@cluster0.scqfhk3.mongodb.net/`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('coneccted')
}).catch(err => console.log(err))

app.listen(port, () => {
    console.log("server running")
})