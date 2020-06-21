var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BookInstanceSchema = new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    imprint: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [
            'Available',
            'Maintenance',
            'Loaned',
            'Reserved'
        ],
        default: 'Maintanence'
    },
    due_back: {
        type: Date,
        default: Date.now
    }
})

BookInstanceSchema.virtual('url').get(() => `/catelog/bookInstance/${this._id}`)

module.exports = mongoose.model('BookInstance', BookInstanceSchema)
