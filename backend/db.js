const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/American-Express?directConnection=true&ssl=false&readPreference=primary";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, )
    .then(() => console.log('Successfully connected to Mongo'))

    .catch((err) => { console.error(err); });
}

module.exports = connectToMongo;