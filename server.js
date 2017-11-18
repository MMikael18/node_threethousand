'use strict';

const express = require('express')
const app = express()

//const bodyParser = require('body-parser');

const MC = require('./server/models/MongoConnect')
MC.OpenConnect();
//console.log(MongoConnect.url);

const WordC = require('./server/controllers/wordsController')

// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())


const router = express.Router()


//router.use(bodyParser.urlencoded({ extended: true }))
//router.use(bodyParser.json())

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

router.post('/words', WordC.create)
router.get ('/words/:jaska', WordC.all)


// router.get('/', function (req, res) {
//   //res.send('Hello World!')
//   res.json({ message: 'welcome to our api! ' })
// })

//router.get('/words/:langId', WordC.allToLang)

// 
// router.get ('/words', WordC.all)
// router.post('/words', WordC.create)

//
// router.get   ('/words/:wordId', WordC.get)
// router.put   ('/words/:wordId', WordC.update)
// router.delete('/words/:wordId', WordC.delete)
// router.delete('/remove_all', WordC.deleteAll)

//
app.use('/api', router)


/***********************/
//    SERVER
/***********************/


app.listen(3000, function () {
  console.log('Three Thousand app run in port 3000!')
})