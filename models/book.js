var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }]
})

BookSchema.virtual('url').get(() => `/catelog/book/${this._id}`)

module.exports = mongoose.model('Book', BookSchema)
