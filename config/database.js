const mongoose = require('mongoose')
require('dotenv').config({path: __dirname + '/.env'})
mongoose.connect(process.env.DB_STRING, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
});