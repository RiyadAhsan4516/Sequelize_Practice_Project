const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const rateLimiter = require("express-rate-limit");
const xss = require("xss-clean");
const helmet = require("helmet");
const router = require("./config/routes");

const app = express();

// enable cors
app.use(cors())

// use helmet for header security
app.use(helmet());

// limit number of requests
const limiter = rateLimiter({
    max: 100,
    windowMs: 60*60*1000,
    message: "Request limit reached. Please try again later"
})
app.use('/api', limiter);

if (process.env.NODE_ENV === "development") {
    console.log("Environment switched to development");
    app.use(logger("dev"));
}

app.use(express.json({limit:'10kb'}));
app.use(cookieParser());
app.use(xss());

app.use("/api", router);

module.exports = app;
