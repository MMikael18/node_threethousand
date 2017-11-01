'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var WordsSchema   = new Schema({
    name: String,
    modified_date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Word', WordsSchema)