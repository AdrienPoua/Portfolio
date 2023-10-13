const Challenge = require('../models/challenge'); // Assurez-vous d'importer correctement votre modèle Challenge

// Obtenir tous les projets
exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouveau projet
exports.createChallenge = async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    const savedChallenge = await challenge.save();
    res.status(201).json(savedChallenge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// Supprimer un projet par son ID
exports.deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndRemove(req.params.id);
    if (!challenge) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }
    res.json({ message: 'Projet supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
