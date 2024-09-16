//importing express module
const express = require("express");
// importing routes
const authrouter = require("./routes/auth.route.js");
const productRouter = require("./routes/products.route.js");
const cartRouter=require('./routes/cart.route.js');

// creating an instance of an express app
const app = express();

// imporitng cookie-parser middleware for handling  cookies
const cookieParser=require("cookie-parser");
//importing database configuration for connecting to the database
const database = require("./config/database");

//importing file upload middleware to handle file uploads
const fileUpload = require("express-fileupload");

// Importing dotenv for environment variable configuration
const dotenv = require("dotenv");

// Importing CORS middleware to handle cross-origin requests
const cors = require("cors");

// Importing Cloudinary configuration for cloud storage
const { cloudinaryConnect } = require("./config/cloudinary.js");

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true, // To allow temporary file storage before processing
    tempFileDir: "/tmp/", // Temp file directory
  })
);

// connecting to cloudinary for cloud-based file storage 
cloudinaryConnect();

//api calls
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);

// Default route for the root path to verify the server is running
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
