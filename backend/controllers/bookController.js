const Book = require("../models/bookModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");
// const cloudinary = require("cloudinary");

// Get All Books
exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
  res.status(201).json({
    success: true,
    message: "All Books Fetched Successfully!",
  });
});
