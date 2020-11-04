const mongoose = require('mongoose');


require('dotenv').config;

const database = function () {
    console.log('initializing database');

    mongoose.connect(process.env.MONGODB_URI || 
        'mongodb://localhost:27017/articles', 
        { useNewUrlParser: true ,
          useUnifiedTopology: true }
    ).then(function(){
        console.log('connected to database')
    })
    .catch(function(error){
        console.log('ERROR\n', error);
        process.exit();
    });
}

module.exports = database;