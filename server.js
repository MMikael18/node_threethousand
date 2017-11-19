'use strict';

const express = require('express')
const app = express()


const MC = require('./server/models/MongoConnect')
MC.OpenConnect();
//MC.ResetAll();

const WordC = require('./server/controllers/wordsController')
const router = express.Router()


/***********************/
//    Middleware
/***********************/


router.use(function(req, res, next) {
  //console.log('Middleware!')
  next()
})


/***********************/
//    ROUTES
/***********************/

//router.post('/words', WordC.create)
router.get ('/words/:langId', WordC.all)
// router.put   ('/words/:wordId', WordC.update)
// router.delete('/remove_all', WordC.deleteAll)

//
app.use('/api', router)


/***********************/
//    SERVER
/***********************/


app.listen(3000, function () {
  console.log('Three Thousand app run in port 3000!')
})