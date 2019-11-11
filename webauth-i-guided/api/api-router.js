const router = require("express").Router();
const brcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

router.post("/", (req, res) => {
  // read a password from the body
  /// hash the password using bcryptJS
  // return it to the user in an object that looks like
  // { password: 'original passsword', hash: 'hashed password' }
  req.body.password;
  .then()
  .catch(error => res.status(500).json(error.message);
  )
});

module.exports = router;
