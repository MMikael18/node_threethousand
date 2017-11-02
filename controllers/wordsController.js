'use strict';

const mongoose = require('mongoose')
mongoose.connect('localhost', 'gettingstarted');
const Word = mongoose.model('Word')

exports.all = function(req, res) {
  console.log('All!')
  Word.find({}, function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}
exports.create = function(req, res) {
  console.log('Create!')
  console.log(req.body.name)
  var new_word = new Word(req.body)
  new_word.name = req.body.name

  new_word.save(function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}

exports.get = function(req, res) {
  Word.findById(req.params.wordId, function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}
exports.update = function(req, res) {
  Word.findOneAndUpdate({_id: req.params.wordId}, req.body, {new: true}, function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}
exports.delete = function(req, res) {
  Word.remove({
    _id: req.params.wordId
  }, function(err, word) {
    if (err)
      res.send(err)
    res.json({ message: 'Word successfully deleted' })
  })
}