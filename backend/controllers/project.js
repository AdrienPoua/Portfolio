const Project = require('../models/project'); // Assurez-vous d'importer correctement votre modèle Project

// Obtenir tous les projets
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouveau projet
exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtenir un projet par son ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un projet par son ID
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un projet par son ID
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndRemove(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }
    res.json({ message: 'Projet supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
