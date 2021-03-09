const path = require("path");
const ErrorResponse = require("../utils/erroRespons");
const asyncHandler = require("../middleware/async");
const User = require("../models/user");
const getCurrentDate = require("../lib/getCurrentDate");

// 유저 리스트 조회
exports.getusers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  console.log(getCurrentDate(day));

  if (!users) {
    next(new ErrorResponse("Users data not found", 404));
  }
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

// 유저 생성
exports.createUser = asyncHandler(async (req, res, next) => {
  const { user_id, email, name } = req.body;
  if (!user_id || !email) return res.status(404).send();

  try {
    let user = await User.findOne({ user_id });

    if (user) {
      return res.status(404).send({
        message: "create new user fail",
        error: "this user has already joined",
      });
    }
    user = await User.create({
      user_id,
      email,
      name,
    });

    res.send({ message: "create new user success", user });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

// 개인 유저 조회
exports.getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(404).send();
  try {
    const user = await User.findOne({ user_id: id });
    if (!user)
      return res.send({ message: "get user fail", error: "null of user" });
    res.send({ message: "get user success", user });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

// 친구 등록

// 유저 정보수정 - 친구 등록, 삭제 

// PUT api/users/:id

exports.friend = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(404).send();
  try {
    const user = await User.findByIdAndUpdate(
      req.params, //
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!user)
      return res.send({ message: "get user fail", error: "null of user" });
    res.send({ message: "get user success", user });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});
