'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WordsSchema   = new Schema({
    name: String
})

module.exports = mongoose.model('Word', WordsSchema)