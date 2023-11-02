const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  createProject,
  deleteProject,
} = require('../controllers/project'); 

router.get('/', getAllProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);

module.exports = router;
