const mongoose = require("mongoose");

const AlphabetSchema = new mongoose.Schema({
    letter: {
      type: String,
      required: true,
    },
    exercise: {
      type: String,
      require: true,
    },
    reps: {
      type: String,
      require: true,
    },
    type: {
      type: String,
     
    },
    eachSide: {
      type: Boolean,
      
    }
   
  });

  module.exports = mongoose.model("Workout", AlphabetSchema);