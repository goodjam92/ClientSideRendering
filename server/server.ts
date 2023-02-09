import express from "express";

const app = express();
const test = require("./router/test");

app.use("/api", test);

const port: number = 8080;
app.listen(port, () => console.log("hello my server port 8080"));
