const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const moment = require("moment")
const path = require("path");
const cookieParser = require("cookie-parser");
const { notFoundHandler, errorHandler } = require("./middlewares/common/errorHandler");

const loginRouter = require("./router/loginRouter");
const pageRouter = require("./router/pageRouter");
const whitepaperRouter = require("./router/whitepaperRouter.js");
const dashboardRouter = require("./router/dashboardRouter");

const app = express();
dotenv.config();
app.locals.moment = moment

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/login", loginRouter);
app.use("/dashboard", dashboardRouter);
app.use("/page", pageRouter);
app.use("/whitepaper", whitepaperRouter)

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});