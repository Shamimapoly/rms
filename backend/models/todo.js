const mongoose = require("mongoose");
const { Schema } = mongoose;
const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: "No title",
    },
    description: {
      type: String,
      required: true,
      default: "No description",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("todo", todoSchema);

// todos