const express = require("express");

const {
  getWorkOut,
  createWorkout,
  putWorkout,
  getOneWorkOut,
} = require("../controller/workout");
const router = express.Router();

router.get("/", getWorkOut);
router.route("/:id").get(getOneWorkOut);
router.post("/", createWorkout);
router.put("/:id", putWorkout);

module.exports = router;
