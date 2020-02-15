const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  userID: String,
  bookISBN: String,
  text: String,
  datePosted: String
});

mongoose.model("summary", SummarySchema);
