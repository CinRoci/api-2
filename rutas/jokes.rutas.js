

const express = require('express');
const router = express.Router();
const jokesController = require('../controladores/jokes.controller');

router.get('/', jokesController.getAllJokes);
router.get('/:id', jokesController.getJokeById);
router.post('/', jokesController.createJoke);
router.put('/:id', jokesController.updateJoke);
router.delete('/:id', jokesController.deleteJoke);

module.exports = router;