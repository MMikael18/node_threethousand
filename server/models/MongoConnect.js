'use strict'

var Mongo = require('mongodb')

var url = "mongodb://localhost/node_threethousand"
exports.url = url

exports.OpenConnect = function(){

    Mongo.MongoClient.connect(url, function(err, db) {
      if (err) throw err
        console.log("Database created!")
      db.close()
    });
    
    Mongo.MongoClient.connect(url, function(err, db) {
        if (err) throw err
        db.createCollection("words", function(err, res) {
            if (err){
                console.log(err)
                throw err
            } 
                console.log("Collection words created")
            db.close()
        });
    });

}

exports.Connect = function(call){
    Mongo.MongoClient.connect(url, function(err, db) {
        call(err, db);
    })
}

//module.exports = MongoConnect;

//const mongoose = require('mongoose')
//const Schema = mongoose.Schema

// var WordsSchema   = new Schema({
//     word: { type: String, index: true, required: true },
//     translation: [{ lang: String, word: String }],
//     date: { type: Date, default: Date.now },
// })

// module.exports = mongoose.model('Word', WordsSchema)