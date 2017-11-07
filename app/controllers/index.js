var express = require('express'),
    router = express.Router();

router.use('/products', require('./products'));

module.exports = router;