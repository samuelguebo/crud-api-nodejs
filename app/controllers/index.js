var express = require('express'),
    router = express.Router();

/**
 * Middlewares
 */

// Initial seed
var seedLoader = require('./app/utils/seedloader');
app.use(seedLoader);

// Authentication
var auth = require('./app/utils/middleware-auth');
app.use(auth);

// Routes
router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/authentication', require('./authentication'));

module.exports = router;