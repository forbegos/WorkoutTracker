const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Exercise = mongoose.model("Exercises", ExerciseSchema);

module.exports = Exercise;
