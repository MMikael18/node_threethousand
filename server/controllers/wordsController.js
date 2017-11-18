'use strict'

//const mongoose = require('mongoose')

const MC = require('../../server/models/MongoConnect')
//MC.OpenConnect();

//var mongo = require('mongodb');
//var url = "mongodb://localhost/node_threethousand";

exports.all = function(req, res) {
  console.log("all")
  console.log(req.params.jaska)
  //res.json({ message: 'all' })

  MC.Connect(function(err, db) {    
    if (err) 
      throw err

    db.collection("words").find({}).toArray(function(err, result) {
      if (err) 
        throw err
      //console.log(result);
      res.json(result)
      db.close()
    })
  })

  /*
  mongo.MongoClient.connect(url, function(err, db) {
    
    if (err) 
      throw err

    db.collection("words").find({}).toArray(function(err, result) {
      if (err) 
        throw err
      //console.log(result);
      res.json(result)
      db.close()
    })
  })
  */

}

exports.create = function(req, res) {
  console.log("create")
  //console.log(req)
  // res.json({ message: 'create' })
  
  MC.Connect(function(err, db) {
    if (err) throw err
    var myobj = { word: "Food"}
    db.collection("words").insertOne(myobj, function(err, result) {
      if (err) throw err;
      //console.log("1 document inserted");
      res.json(result)
      db.close()
    })
  });

  /*
  mongo.MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var myobj = { word: "Food"}
    db.collection("words").insertOne(myobj, function(err, result) {
      if (err) throw err;
      //console.log("1 document inserted");
      res.json(result)
      db.close()
    })
  })
  */
  
}

/*
exports.allToLang = function(req, res){
  Word.findById(req.params.wordId, function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}

// /words
exports.create = function(req, res) {
  
  console.log(req.body.word)
  
  var new_word = new Word(req.body)
  new_word.word = req.body.word
  
  Word.findOne( { 'word': req.body.word }, function(err, word) {
    
    console.log(err)

    if (err)
      return res.send(err)
    
    if( word != null) {
      res.json({ message: 'Word all ready exsist!'})
      return true
    } else {
      console.log('Create!')
      new_word.save(function(err, word) {
        if (err)
          res.send(err)
        res.json(word)
      })
    }
  })
  
}

// /words/:wordId
exports.get = function(req, res) {
  Word.findById(req.params.wordId, function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}

// /words/:wordId
exports.update = function(req, res) {
  Word.findOneAndUpdate({_id: req.params.wordId}, req.body, {new: true}, function(err, word) {
    if (err)
      res.send(err)
    res.json(word)
  })
}

//  /words/:wordId
exports.delete = function(req, res) {
  Word.remove({
    _id: req.params.wordId
  }, function(err, word) {
    if (err)
      res.send(err)
    res.json({ message: 'Word successfully deleted: ' + word })
  })
}

// /remove_all
exports.deleteAll = function(req, res) {
  Word.remove({}, function(err, word) {
    if (err)
      res.send(err)
    res.json({ message: 'All words successfully deleted'})
  })
}
*/