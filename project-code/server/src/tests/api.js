require('dotenv').config();

const {default: axios} = require("axios")

const api = axios.create({
    baseURL: process.env.API_URL,
});

module.exports = api