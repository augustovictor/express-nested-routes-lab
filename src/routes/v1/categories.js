const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.end())
router.get('/:id', (req, res) => res.end())

module.exports = router