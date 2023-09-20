const express = require('express');
const router = express.Router();
const {
  getAllChallenges,
  createChallenge,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
} = require('../controllers/challenge'); 

router.get('/', getAllChallenges);
router.post('/', createChallenge);
router.get('/:id', getChallengeById);
router.put('/:id', updateChallenge);
router.delete('/:id', deleteChallenge);

module.exports = router;
