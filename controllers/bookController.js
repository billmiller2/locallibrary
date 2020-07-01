var Book = require('../models/book')
var Author = require('../models/author')
var Genre = require('../models/genre')
var BookInstance = require('../models/bookinstance')

var async = require('async')

exports.index = (req, res) => {
    async.parallel({
        book_count: (callback) => {
            Book.countDocuments({}, callback)
        },
        book_instance_count: (callback) => {
            BookInstance.countDocuments({}, callback)
        },
        book_instance_available_count: (callback) => {
            BookInstance.countDocuments({status: 'Available'}, callback)
        },
        author_count: (callback) => {
            Author.countDocuments({}, callback)
        },
        genre_count: (callback) => {
            Genre.countDocuments({}, callback)
        }
    }, (err, results) => 
        res.render('index', { title: 'Local Library Home', error: err, data: results })
    )
}

exports.book_list = (req, res) => res.send('NOT IMPLEMENTED: Book list')
exports.book_detail = (req, res) => res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`)
exports.book_create_get = (req, res) => res.send('NOT IMPLEMENTED: Book create get')
exports.book_create_post = (req, res) => res.send('NOT IMPLEMENTED: Book create post')
exports.book_delete_get = (req, res) => res.send('NOT IMPLEMENTED: Book delete get')
exports.book_delete_post = (req, res) => res.send('NOT IMPLEMENTED: Book delete post')
exports.book_update_get = (req, res) => res.send('NOT IMPLEMENTED: Book update get')
exports.book_update_post = (req, res) => res.send('NOT IMPLEMENTED: Book update post')
