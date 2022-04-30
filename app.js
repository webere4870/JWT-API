const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const expressLayouts = require('express-ejs-layouts')


require('dotenv').config()
const PORT = process.env.PORT || 5000;
require('./config/database.js')
require('./config/userModel.js')
require('./config/passport')
const routes = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(expressLayouts)
app.use(cookieParser())                         // Before routes
app.use(express.static(__dirname +"/static"))
app.use(passport.initialize())
app.use('/', routes)



app.listen(PORT, ()=>
{
    console.log("Listening on port 5000...")
})