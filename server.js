'use strict';

const express = require('express')
const app = express()

const WordM = require('./models/wordsModel')
const WordC = require('./controllers/wordsController')

const router = express.Router()

/***********************/
//    Middleware
/***********************/



router.use(function(req, res, next) {
  console.log('Middleware!')
  next()
})



/***********************/
//    ROUTES
/***********************/


router.get('/', function (req, res) {
  //res.send('Hello World!')
  res.json({ message: 'welcome to our api!' })
})

app.use('/api', router)



/***********************/
//    SERVER
/***********************/



app.listen(3000, function () {
  console.log('Three Thousand app run in port 3000!')
})