const Joke = require("./../models/jokes.model")

module.exports.testApi = (req, res) => {
    res.json({ Status: "ok" })
}

module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

module.exports.oneJoke = (req, res) => {
    const id = req.params.id
    Joke.findOne({ _id: id })
        .then(oneJoke => res.json(oneJoke))
}

module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) => {
    const id = req.params.id
    const updatedValue = req.body
    Joke.findOneAndUpdate(
        { _id: id },
        updatedValue,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) => {
    const id = req.params.id
    Joke.deleteOne({ _id: id })
        .then(message => res.json(message))
        .catch(err => res.json(err))
}