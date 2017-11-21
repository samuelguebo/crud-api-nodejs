var express = require('express'),
    router = express.Router();

router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/authenticate', require('./authenticate'));

module.exports = router;