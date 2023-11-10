import { email, password } from './password'
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

mongoose.connect(`mongodb+srv://${email}:<${password}>@cluster0.scqfhk3.mongodb.net/`)