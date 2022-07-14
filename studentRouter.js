const { Router } = require("express");
const router = new Router();

const students = ["Gonza", "Miriam", "Timo"];
router.get("/", (request, response) => response.send(students));

module.exports = router;
