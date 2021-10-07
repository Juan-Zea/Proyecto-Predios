require ('dotenv').config()
const cors = require ('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const {PORT} = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({estended : false}))

app.listen(PORT,()=>console.log(`Server on port ${PORT}`))