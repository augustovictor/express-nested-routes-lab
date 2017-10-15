const express = require('express')

const books = require('./books')
const categories = require('./categories')

const router = express.Router()

categories.use('/:catId/books', books)

router.use('/categories', categories)

module.exports = router