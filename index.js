const axios = require("axios");
const util = require("util");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>The server is running</h1>");
});

app.get("/test", async (req, res) => {
  let response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
  );
  res.send(response.data);
});

// app.get("/test2", (req, res) => {
//   let response = axios;
// });
// app.get("/sending", (req, res) => {
//   res.send("lol");
// });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
//change
