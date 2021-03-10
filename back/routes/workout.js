const express = require("express");

const { getWorkOut, createWorkout } = require("../controller/workout");
const router = express.Router();

router.get("/", getWorkOut);
router.post("/", createWorkout);

module.exports = router;
