const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://SumayaSha:Ben12345@clustersasu.98kvr.mongodb.net/ITCase?retryWrites=true&w=majority"
);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// test

const QuizRoute = require("../app/Quiz");
const UserRoute = require("../app/User");
const QuestionRoute = require("../app/Question");
const AnswerRoute = require("../app/Answer");
const ScoreRoute = require("../app/Score");
const ResponseRoute = require("../app/Response");

app.use("/quiz", QuizRoute);
app.use("/", UserRoute);
app.use("/", QuestionRoute);
app.use("/", AnswerRoute);
app.use("/", ScoreRoute);
app.use("/", ResponseRoute);

app.listen(port, () => {
  console.log(`Ventigrate Backend Loading on: ${port}`);
});

export {};
