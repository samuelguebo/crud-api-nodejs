var express = require('express'),
    router = express.Router();

// Routes
router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/authentication', require('./authenticate'));

module.exports = router;