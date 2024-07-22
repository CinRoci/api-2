const Joke = require('../modelos/jokes.model');


exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      res.status(404).json({ message: 'Chiste no encontrado' });
      return;
    }
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createJoke = async (req, res) => {
  const newJoke = new Joke({
    jokeText: req.body.jokeText,
    category: req.body.category,
  });

  try {
    const createdJoke = await newJoke.save();
    res.status(201).json(createdJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateJoke = async (req, res) => {
  try {
    const updatedJoke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteJoke = async (req, res) => {
  try {
    const deletedJoke = await Joke.findByIdAndRemove(req.params.id);
    res.json(deletedJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};