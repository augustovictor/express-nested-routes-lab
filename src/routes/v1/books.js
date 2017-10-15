const express = require('express')

const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => res.send(`Fetching all books from category ${ req.params.catId }`))
router.get('/:id', (req, res) => res.send(`Fetching from category ${ req.params.catId } the book ${ req.params.id }`))

module.exports = router