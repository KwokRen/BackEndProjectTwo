const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/fitness', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
