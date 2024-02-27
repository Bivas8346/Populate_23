const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    movie:{
        type: Schema.Types.ObjectId,
        ref: "movie"

    }
})

module.exports = new mongoose.model("user",UserSchema)