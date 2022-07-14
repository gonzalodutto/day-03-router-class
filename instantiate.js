const express = require("express");

const { Router } = express;

const router = new Router();

router.get("/", (request, response) =>
  response.send("Welcome to the homepage!")
);

// If we write "http GET :4000/hi/Gonza" we trigger this:
router.get("/hi/:name", (request, response) => {
  // to get params from request:
  // request.params.name
  const name = request.params.name;
  response.send(`Hi! ${name}`);
});

module.exports = router;

const app = express();
app.use(router);

const port = 4000;
app.listen(port);
