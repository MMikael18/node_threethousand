'use strict';

const mongoose = require('mongoose')
const Word = mongoose.model('Word')

exports.get_all = function(req, res) {
 Word.find({}, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}