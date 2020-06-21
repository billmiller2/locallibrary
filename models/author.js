var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        maxlength: 100
    },
    family_name: {
        type: String,
        required: true,
        maxlength: 100
    },
    date_of_birth: {
        type: Date
    },
    date_of_death: {
        type: Date
    }
})

AuthorSchema.virtual('name').get(() => {
    if (this.first_name && this.family_name) {
        return `${this.family_name}, ${this.first_name}`
    }
    return ''
})

AuthorSchema.virtual('lifespan').get(() =>
    (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
)

AuthorSchema.virtual('url').get(() => `/catelog/author/${this._id}`)

module.exports = mongoose.model('Author', AuthorSchema)
