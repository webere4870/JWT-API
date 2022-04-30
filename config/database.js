const mongoose = require('mongoose')
require('dotenv').config({path: __dirname + '/.env'})
mongoose.createConnection(process.env.DB_STRING, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
});