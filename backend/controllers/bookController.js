const Book = require("../models/bookModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");
// const cloudinary = require("cloudinary");

// Get All Books
exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };
  console.log(reqQuery);

  //If title is present use regex operator to find all books having this text string in their title
  if (reqQuery.title) {
    reqQuery.title = {
      $regex: reqQuery.title,
      $options: "i",
    };
  }

  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  console.log("execution");
  console.log(JSON.parse(queryStr));
  // Finding resource...
  query = Book.find(JSON.parse(queryStr));

  // Executing query
  const books = await query;

  // ////////////////////////////////////////////////////////////
  // const books = await Book.find();
  const booksCount = books.length;
  res.status(201).json({
    success: true,
    booksCount,
    books,
    message: "All Books Fetched for User Successfully!",
  });
});
