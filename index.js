const express = require("express");
const app = express();
const path = require("path");
const db = require("./models");
const session = require("express-session");
const authRoute = require("./Routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "nqfKP7Gnq7",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/api/auth", authRoute);
app.use(express.static(path.join(__dirname, "coursework2", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "coursework2", "build", "index.html"));
});

const port = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
