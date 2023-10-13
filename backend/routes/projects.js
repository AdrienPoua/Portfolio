const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  createProject,
  deleteProject,
} = require('../controllers/project'); 
const auth = require('../middleware/auth');

router.get('/', getAllProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);

module.exports = router;
