var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('respond with a resource'))
router.get('/cool', (req, res) => res.send('You\'re so cool'))

module.exports = router;
