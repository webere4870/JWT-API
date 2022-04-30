const mongoose = require('mongoose')
require('dotenv').config({path: __dirname + '/.env'})
mongoose.createConnection("mongodb+srv://webere4870:Jack$Bauer$24$@cluster0.fyc6b.mongodb.net/Users?retryWrites=true&w=majority", {
    useUnifiedTopology:true,
    useNewUrlParser: true,
});