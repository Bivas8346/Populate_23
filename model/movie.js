const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    Moviename:{
        type: String,
        require: true
    },
    actor:{
        type: String,
        require: true
    },
    director:{
        type: String,
        require: true
    }
})

module.exports = new mongoose.model("movie",MovieSchema)