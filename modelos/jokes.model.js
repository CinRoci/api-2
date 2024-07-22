const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  jokeText: {
    type: String,
    required: true,
  },
  category: String,
});

module.exports = mongoose.model('Broma', JokeSchema);