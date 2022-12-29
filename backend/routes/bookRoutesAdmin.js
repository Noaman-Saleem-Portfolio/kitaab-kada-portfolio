const express = require("express");
const { validateBook } = require("../middleware/joiValidation");
// const {
//   getAllBooks,
//   createBook,
//   updateBook,
//   deleteBook,
//   getBookDetails,
//   createBookReview,
//   getBookReviews,
//   deleteReview,
//   getAdminBooks,
// } = require("../controllers/bookController");

const {
  getAllBooksAdmin,
  createBookAdmin,
  deleteBook,
  updateBook,
  getBookDetails,
} = require("../controllers/bookControllerAdmin");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//Get all books
router.route("/admin/books").get(getAllBooksAdmin);
// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

//Create new book
router.route("/admin/book/new").post(validateBook, createBookAdmin);
// router
//   .route("/admin/product/new")
//   .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

//Delete and Update a book
router
  .route("/admin/book/:id")
  .delete(deleteBook)
  .put(validateBook, updateBook);
// router
//   .route("/admin/product/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/admin/book/:id").get(getBookDetails);
// router.route("/product/:id").get(getProductDetails);

// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
