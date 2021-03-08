const path = require("path");
const ErrorResponse = require("../utils/erroRespons");
const asyncHandler = require("../middleware/async");
const Workout = require("../models/workout");
const User = require("../models/user");

// ## Workouts

// 운동 리스트 조회

// GET api/workouts-
exports.getWorkOut = asyncHandler(async (req, res, next) => {
  const workout = await Workout.find();
  if (!workout.length) {
    next(new ErrorResponse("Workout data not found", 404));
  }
  res.status(200).json({
    success: true,
    data: workout,
  });
});

// / 운동 정보 등록

// //  POST api/workouts`

exports.createWorkout = asyncHandler(async (req, res, next) => {
  const { workout_type, hour, workout_calorie, user_id } = req.body;

  try {
    let user = await User.findOne({ user_id });
    if (!user) {
      return res.status(404).send({
        message: "create new user fail",
        error: "this user has already joined",
      });
    }
    const workout = await Workout.create({
      workout_type,
      hour,
      workout_calorie,
      user_id,
    });

    res.send({ message: "create new workout success", workout });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

// 운동 정보수정  - 댓글 달기

//  PUT api/workouts/:id

//   운동시간 가져오기

// GET api/worksouts/hours/:type (type: m, w, d)
