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
// mongoose.Promise = global.Promise
// mongoose.createConnection('mongodb://localhost/node_threethousand')
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to');
}); 
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});



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
//
app.use('/api', router)


/***********************/
//    SERVER
/***********************/


app.listen(3000, function () {
  console.log('Three Thousand app run in port 3000!')
})