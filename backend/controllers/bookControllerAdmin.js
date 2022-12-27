const Book = require("../models/bookModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");
// const cloudinary = require("cloudinary");

// Get All Books
exports.getAllBooksAdmin = catchAsyncErrors(async (req, res, next) => {
  res.status(201).json({
    success: true,
    message: "All Books Fetched for Admin Successfully!",
  });
});

//Create Product Admin
exports.createProductAdmin = catchAsyncErrors(async (req, res, next) => {
  res.status().json({
    success: true,
    message: "Book created successfully!",
  });
});
