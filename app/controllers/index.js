var express = require('express'),
    app     = express(),
    router  = express.Router();

/**
 * Middlewares
 */

// Initial seed
var seedLoader = require('../utils/middleware-seed');
app.use(seedLoader);

// Authentication
router.use(require('../utils/middleware-auth'));

// Routes
router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/authentication', require('./authentication'));



module.exports = router;