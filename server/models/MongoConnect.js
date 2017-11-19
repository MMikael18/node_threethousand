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

/* to dev */

var fs = require('fs')
var words = JSON.parse(fs.readFileSync('./server/models/words.json', 'utf8'))

exports.ResetAll = function(){
    Mongo.MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("words").drop(function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
        });
    })
    Mongo.MongoClient.connect(url, function(err, db) {
        if (err) throw err;        
        db.collection("words").insertMany(words, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    })
}
