const express = require('express');
const router = express.Router();
const {
  getAllChallenges,
  createChallenge,
  deleteChallenge,
} = require('../controllers/challenge'); 

router.get('/', getAllChallenges);
router.post('/', createChallenge);
router.delete('/:id', deleteChallenge);

module.exports = router;
