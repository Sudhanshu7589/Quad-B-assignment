const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup Controller for Registering USers

exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const { fullName, userName, email, password, role } = req.body;
    // Check if All Details are there or not
    if (!fullName || !userName || !email || !password) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user with the provided details
    let user;
    // If a role is provided (e.g., 'admin'), set the role and create the user
    if (role) {
      user = await User.create({
        fullName,
        userName,
        email,
        role,
        password: hashedPassword,
        profilePhoto: `https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`,
      });
    }
    // If no role is provided, default to a regular user
    else {
      user = await User.create({
        fullName,
        userName,
        email,
        password: hashedPassword,
        profilePhoto: `https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`,
      });
    }
    // Respond with success and user details

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};
// Login Controller for User Authentication

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if both email and password are provided

    if (!email || !password) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    // Find user by email

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not found.",
      });
    }
    // Compare provided password with the hashed password in the database

    const isPasswordmatch = await bcrypt.compare(password, user.password);
    if (isPasswordmatch) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      // Store the token in the user document and remove password from response

      user.token = token;
      user.password = undefined;
      // Set token as a cookie and send response

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User login successfully.",
      });
      req.user = user;
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is not match.",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Login Failure Please try Again.",
    });
  }
};
// Logout Controller to clear the token cookie

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logout successfully.",
    success: true,
  });
};

// Forgot Password Controller to handle password reset

exports.forgotPassword = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    // Check if the new password matches the confirmation password

    if (password !== confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "Password not match to confirm password.",
      });
    }
    // Find the user by email

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email.",
      });
    }
    // Hash the new password and save it to the database

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    // Respond with success

    return res.status(201).json({
      success: true,
      message: "Password forgot successfully.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
};
