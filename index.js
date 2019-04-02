const express = require("express");
 require('./services/passport');
const PORT = process.env.PORT || 5000;
 

const app = express();
require('./routes/authRoutes')(app);

/* passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken:", accessToken);
      console.log("refresh token:", refreshToken);
      console.log("profile", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
app.get("/auth/google/callback", passport.authenticate("google")); */

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
