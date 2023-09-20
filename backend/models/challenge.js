const mongoose = require("mongoose");

const challengeSchema = mongoose.Schema({
  img: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: String, required: true },
  language : { type: String, required: true},
  tags: { type: Array, required: true },
  difficulty: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model("Challenge", challengeSchema);


