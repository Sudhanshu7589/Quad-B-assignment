// Importing express module
const express = require("express");
// Destructuring the controller functions for signup, login, logout, and forgotPassword
const { signup, login, logout, forgotPassword } = require("../controller/Auth");
// Initializing the router object from express
const router = express.Router();

// Route to handle user registration (POST request to /register)
router.post("/register", signup);

// Route to handle user login (POST request to /login)
router.post("/login", login);

// Route to handle user logout (GET request to /logout)
router.get("/logout", logout);

// Route to handle password reset request (POST request to /forgotPassword)
router.post("/forgotPassword", forgotPassword);

// Exporting the router to be used in other files
module.exports = router;
