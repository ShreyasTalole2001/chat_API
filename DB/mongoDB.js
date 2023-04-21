const mongoose = require('mongoose')

const dbURI = "mongodb+srv://ShreyasTalole2001:u8vz1Ns2kTcztQIg@cluster0.gryke1o.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to DB")
    }).catch((error) => {
        console.log(error)
    })