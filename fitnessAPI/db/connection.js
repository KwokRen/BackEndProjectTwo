const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fitness', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
