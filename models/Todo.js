const mongoose = require('mongoose')
const alphabetSchema = new mongoose.Schema({
    letter: {
      type: String,
      required: true,
    },
    exercise: {
        type: String,
        required: true,
      },
    completed: {
      type: Boolean,
      required: true,
    }
  })
  
  module.exports = mongoose.model('alphabet', alphabetSchema)
