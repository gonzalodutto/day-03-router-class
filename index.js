const express = require("express");
const teacherRouter = require("./teacherRouter");
const studentRouter = require("./studentRouter");

const app = express();
app.use("/teachers", teacherRouter);
app.use("/students", studentRouter);

const port = 4000;
app.listen(port);
