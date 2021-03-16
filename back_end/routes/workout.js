const express = require("express");

const {
  getWorkOut,
  createWorkout,
  putWorkout,
} = require("../controller/workout");
const router = express.Router();

router.get("/", getWorkOut);
router.post("/", createWorkout);
router.put("/:id", putWorkout);

module.exports = router;
