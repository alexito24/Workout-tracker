const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
    name: {
        type: String,
        trim: true,
        required: "please enter a name for this exercise."
    },
    type: {
        type: String,
        trim: true,
        required: "Plese enter the type of this exercise."
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
    },
    distance: {
        type: Number,
        default: null
    }
  }],
  totalWeight: {
    type: Number,
    default: 0,
  },
  totalDuration: {
    type: Number,
    default: 0,
  }
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout