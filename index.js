const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./models/Summary");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("connected to mongoDB");
});

const app = express();

app.use(passport.initialize());
app.use(passport.session());

// routes
require("./routes/summaryRoutes")(app);
require("./routes/authRoutes")(app);
app.get("/api/books", async (req, res) => {
  let response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"
  );
  res.send(response.data);
});
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
//change
