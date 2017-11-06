'use strict';

const express = require('express')
const app = express()

const bodyParser = require('body-parser');

const WordM = require('./models/wordsModel')
const WordC = require('./controllers/wordsController')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var mongoose   = require('mongoose')      
mongoose.connect('localhost', 'node_threethousand');
mongoose.Promise = global.Promise

let mongoDB = mongoose.createConnection('mongodb://localhost/node_threethousand',{
      useMongoClient: true,
      promiseLibrary: global.Promise // Deprecation issue again
    })
mongoDB
.then(db => {
    console.log('Mongodb has been connected')
})
.catch(err => {
    console.log('Error while trying to connect with mongodb')
    throw err
})

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
// 
router.get ('/words', WordC.all)
router.post('/words', WordC.create)

//
router.get   ('/words/:wordId', WordC.get)
router.put   ('/words/:wordId', WordC.update)
router.delete('/words/:wordId', WordC.delete)
router.delete('/remove_all', WordC.deleteAll)
//
app.use('/api', router)


/***********************/
//    SERVER
/***********************/


app.listen(3000, function () {
  console.log('Three Thousand app run in port 3000!')
})