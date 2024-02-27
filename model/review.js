const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "movie"

    },
    review: {
        type: String,
        require: true
    }
})

module.exports = new mongoose.model("review", RevSchema)