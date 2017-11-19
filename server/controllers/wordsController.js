'use strict'

const MC = require('../../server/models/MongoConnect')

exports.all = function(req, res) {

  //console.log(req.params.langId)
  //res.json({ message: 'all' })

  var fields = 
  {
    _id : false,
    en : true
  };
  fields[req.params.langId] = true;
  //console.log(fields);

  MC.Connect(function(err, db) {    
    if (err) 
      throw err

    db.collection("words").find({},fields).toArray(function(err, result) {
      if (err) 
        throw err
      //console.log(result);
      res.json(result)
      db.close()
    })
  })
}

exports.create = function(req, res) {
  //console.log("create")
  
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

}