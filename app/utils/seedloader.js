var SeedLoader = function (request, response, next) {
    console.log("Entered SeedLoader Middleware");
    next();
}

module.exports = SeedLoader;