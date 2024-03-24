const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectMongoDb = require("./connection");
const port = 3001;

const chatboxRoute = require("./routes/Chatbot");
const collegeRoute = require("./routes/College");
const courseRoute = require("./routes/Courses");

dotenv.config();
app.use(cors());
app.use(express.json());

connectMongoDb(process.env.MONGO_URL);

app.use("/chatbox", chatboxRoute);
app.use("/colleges", collegeRoute);
app.use("/courses", courseRoute);

app.listen(3001, () => { console.log(`Your port is running at ${port}`) });


