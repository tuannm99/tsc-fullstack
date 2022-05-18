const CustomError = require("../common/error");
const catchAsync = require("../common/catchAsync");

const { Food } = require("../models");

const addFood = catchAsync(async (req, res) => {
  const food = new Food(req.body);
  await food.save();
  res.status(201).json(food);
});

const getFoodById = catchAsync(async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    throw new CustomError(404, "food not found!");
  }
  res.status(200).json(food);
});

const getFoods = catchAsync(async (req, res) => {
  const foods = await Food.find();
  res.status(200).json(foods);
});

const updateFoodById = catchAsync(async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    throw new CustomError(404, "food not found!");
  }
  Object.assign(food, req.body);
  await food.save();
  res.status(200).json(food);
});

const updateFavourite = catchAsync(async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    throw new CustomError(404, "food not found!");
  }
  Object.assign(food, { favourite: !food.favourite });
  await food.save();
  res.status(200).json(food);
});

const deleteFoodById = catchAsync(async (req, res) => {
  const food = await Food.findByIdAndRemove(req.params.id);
  if (!food) {
    throw new CustomError(404, "food not found!");
  }
  res.status(200).json(food);
});

module.exports = {
  addFood,
  getFoodById,
  getFoods,
  updateFoodById,
  updateFavourite,
  deleteFoodById,
};
