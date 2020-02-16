const mongoose = require("mongoose");

const Summary = mongoose.model("summary");

module.exports = app => {
  app.get("/api/createSummary", (req, res) => {
    new Summary({
      userID: req.user.id,
      text: "12345"
    }).save(function(err) {
      if (err) return handleError(err);
      else console.log("saved!");
    });
    res.send("saved!");
  });

  app.get("/api/getUserSummaries", async (req, res) => {
    console.log(req.user || "not logged in");
    const searchResults = await Summary.find({ userID: req.user.id });
    console.log(searchResults);
    res.send("finished searching");
  });
};
