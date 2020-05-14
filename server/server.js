const express = require('express')

const app = express()

const webRoutes = require('./routes/web.js')

const pug = require('pug')
const path = require('path')
const bodyParser = require('body-parser')

//Install mongoose
const mongoose = require('mongoose')
//Connect database
//mongoose.connect('mongodb://localhost/"name of database"')
mongoose.connect('mongodb://localhost/nodekb',{useUnifiedTopology: true, useNewUrlParser: true})
let db = mongoose.connection;
//Check connection
db.once('open', function(){
  console.log('Connected to MongoDB')
});
//Check for DB errors
db.on('error', function(error){
  console.log(error)
});
//Bring in Models

//Install body-parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




require('dotenv').config()

app.use(express.static('client/public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../client/src/views'))

app.use(webRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://www.localhost:3000/ to stop server press control+c')
})
