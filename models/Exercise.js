const mongoose = require("mongoose");
Schema = mongoose.Schema

const ExerciseSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
      },
  });

  module.exports = mongoose.model("Exercise", ExerciseSchema);
  //exerciseSchema is a model with an object of another model in it (workoutSchema)