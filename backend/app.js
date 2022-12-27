const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
// const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Route Imports
const bookRoutes = require("./routes/bookRoutes");
const bookRoutesAdmin = require("./routes/bookRoutesAdmin");
// const user = require("./routes/userRoute");
// const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");

app.use("/api/v1", bookRoutes);
app.use("/api/v1", bookRoutesAdmin);
// app.use("/api/v1", user);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;