const { Router } = require("express");

const router = new Router();
// If we write "http GET :4000/" we trigger this:
router.get("/", (request, response) => response.send("separeted"));

module.exports = router;
