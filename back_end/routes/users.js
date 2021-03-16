const express = require("express");

const {
  getusers,
  createUser,
  getUser,
  // friend,
} = require("../controller/users");

const router = express.Router();

router.get("/", getusers);
router.get("/:id", getUser);
router.post("/", createUser);
// router.put("/users/:id", friend);

module.exports = router;

// {
//   user_id:"min123"
//   email:"12345@gmail.com"
// }
