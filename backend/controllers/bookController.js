const Book = require("../models/bookModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");
// const cloudinary = require("cloudinary");

// Get All Books
exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
  const books = await Book.find();
  const booksCount = await Book.countDocuments();
  res.status(201).json({
    success: true,
    booksCount,
    books,
    message: "All Books Fetched for User Successfully!",
  });
});
