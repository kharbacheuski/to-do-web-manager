const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app