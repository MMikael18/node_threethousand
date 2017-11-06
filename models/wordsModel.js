'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WordsSchema   = new Schema({
    word: { type: String, index: true, required: true },
    translation: [{ lang: String, word: String }],
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Word', WordsSchema)