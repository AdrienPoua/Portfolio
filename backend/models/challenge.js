const mongoose = require("mongoose");

const challengeSchema = mongoose.Schema({
  img: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, required: true },
  tags: { type: Array, required: true },
  _id : { type : String , required : true },
  difficulty: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model("Challenge", challengeSchema);


