const Book = require("../models/bookModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");
// const cloudinary = require("cloudinary");

// Get All Books
exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
  let query;
  console.log("i am in backend");
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

  // const x = await query.countDocuments();
  // console.log(x);

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 200;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Book.countDocuments();

  console.log("Total :", total);

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const books = await query;

  const totalReturned = books.length;

  // Pagination result
  const pagination = {};

  console.log("EndIndex :", endIndex);
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (totalReturned < endIndex) {
    console.log("delete next");
    delete pagination[next];
  }

  console.log("StartIndex :", startIndex);
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  console.log("Pagination :", pagination);
  console.log("Total Returned :", books.length);

  // ////////////////////////////////////////////////////////////
  // const books = await Book.find();
  res.status(200).json({
    success: true,
    booksCount: books.length,
    books,
    pagination,
    totalReturned,
    message: "All Books Fetched for User Successfully!",
  });
});
