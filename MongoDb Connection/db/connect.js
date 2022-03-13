
const express = require('express')
const mongoose = require('mongoose')





const connectDB = (url) => {
    // Connect to Database
    mongoose.connect(url)
}


module.exports = connectDB
