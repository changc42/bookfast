const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/currentUser", (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      let isAuth = req.isAuthenticated();
      console.log(isAuth)
      //res.send(isAuth)
      console.log('after isAuth')
      res.redirect('http://localhost:3000')
      //res.send("logged in!");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  
};
