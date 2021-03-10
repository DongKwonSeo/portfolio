const path = require("path");
const ErrorResponse = require("../utils/erroRespons");
const asyncHandler = require("../middleware/async");
const Meals = require("../models/meals");
const User = require("../models/user");
const { findById } = require("../models/meals");

const { json } = require("body-parser");
const { Comment } = require("../models/comment");
const getCurrentDate = require("../lib/getCurrentDate");

// 전체 식단 리스트 조회
// GET api/meals/
exports.getmeals = asyncHandler(async (req, res, next) => {
  const meals = await Meals.find();
  if (!meals) {
    next(new ErrorResponse("Meals data not found", 404));
  }
  res.status(200).json({
    success: true,
    data: meals,
  });
});

// 식단 등록
// POST api/meals/
// POST api/user/:id/meals
exports.createMeal = asyncHandler(async (req, res, next) => {
  let { meal_type, calorie, meal_desc, user_id } = req.body;
  console.log(meal_type, calorie, meal_desc, user_id);
  try {
    let user = await User.findOne({ _id: user_id });
    if (!user) {
      return res.status(404).send({
        message: "create new user fail",
        error: "this user has already joined",
      });
    }
    const meals = await Meals.create({
      meal_type,
      calorie,
      meal_desc,
      user: user_id,
    });

    res.send({ message: "create new user success", meals });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

// 식단 정보수정-댓글 -달기
// PUT api/meals/:id
exports.putMeal = asyncHandler(async (req, res, next) => {
  let { comments, user_id } = req.body;
  console.log(comments, user_id, req.params.id);
  let meal = await Meals.findById(req.params.id);
  console.log(meal);
  let comment = new Comment({
    comment: comments,
    user: user_id,
    ons: meal._id,
    onModels: "Meals",
  });

  [meal, cooment] = await Promise.all([
    Meals.updateOne({ _id: meal._id }, { $push: { comments: comment } }),
    comment.save(),
  ]);

  res.status(200).json({
    success: true,
    meal,
    comment,
  });
});

// const meals = await Meals.findByIdAndUpdate(
//   req.params.id, //
//   req.body,
//   {
//     new: true,
//     runValidators: true,
//   }
// );

// try {
//   let user = await User.findOne({ user_id });
//   if (!user) {
//     return res.status(404).send({
//       message: "create new comments fail",
//       error: "this user has already joined",
//     });
//   }
//   const meals = await Meals.create({ comments, user_id });
//   res.send({ message: "create new user success", meals });
// } catch (e) {
//   console.error(e);
//   res.status(500).send();
// }

// 칼로리 가져오기
// GET api/meals/cal
exports.getCalorie = asyncHandler(async (req, res, next) => {
  const { user_id } = req.params;
  if (!user_id) return res.status(404).send();
  try {
    const calorie = await Meals.findOne({ calorie });

    if (!calorie)
      return res.send({ message: "get user fail", error: "null of user" });
    res.send({ message: "get user success", user });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }

  // res.status(200).json({
  //   success: true,
  //   data: calorie,
  // });
  // console.log(calorie);
});

// 이미지 등록

//  POST api/meals/upload
exports.mealImg = asyncHandler(async (req, res, next) => {
  const { img } = req.body;
  const mealImg = req.files.mealImg;

  mealImg.mv("../uploads" + mealImg.name, function (e) {
    if (e) {
      console.log("could't find file");
    } else {
      console.log("mealsIMg file uploaded");
    }
  });
});

// {
//   "meal_desc":["사과","수박"],
//   "calorie":"7000",
//   "user_id": "6043c0fb032f6022cda5c18a",
//   "meal_type":"점심"
// }