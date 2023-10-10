const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  srcset: { type: String, required: true },
  url: { type: String, required: true },
  year: { type: Number, required: true },
  technologies: [String], // Tableau de svg
  tags: { type: Array, required: true },
  github: { type: String },
  difficulty: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model("Project", projectSchema);


