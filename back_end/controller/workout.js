const path = require("path");
const ErrorResponse = require("../utils/erroRespons");
const asyncHandler = require("../middleware/async");

const Workout = require("../models/workout");
const User = require("../models/user");
const { Comment } = require("../models/comment");
const getCurrentDate = require("../lib/getCurrentDate");
const meals = require("../models/meals");

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

// GET api/workouts:id
//운동 리스트 가져오기

exports.getOneWorkOut = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const workout = await Workout.findById(id);
  if (!workout) {
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
  console.log(user_id);
  try {
    let user = await User.findById(user_id);
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
      user: user_id,
    });

    res.send({ message: "create new workout success", workout });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

// 운동 정보수정  - 댓글 달기

//  PUT api/workouts/:id
exports.putWorkout = asyncHandler(async (req, res, next) => {
  const { comments, user_id } = req.body;
  console.log(comments, user_id);
  let workout = await Workout.findById(req.params.id);

  const comment = Comment({
    comment: comments,
    user: user_id,
    content: workout._id,
    onModel: "Workout",
  });
  // [workout,comment] = await
  workout = await Workout.findByIdAndUpdate(
    { _id: workout._id },
    { $push: { comments: comment } },
    { new: true, runValidators: true }
  );
  await comment.save();
  res.status(200).json({ success: true, workout, comment });
});
