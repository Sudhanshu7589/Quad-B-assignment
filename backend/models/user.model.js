const mongoose = require("mongoose");

// Define the schema for a user in the database
const userSchema = new mongoose.Schema(
  {
    // Full name of the user, required and trimmed to remove extra spaces
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    //UserName, required and trimmed
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    //User's email ,required and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },
    //User's password
    password: {
      type: String,
      required: true,
    },
    //User role ,defaults to 'user', can e changed for admins or other roles
    role: {
      type: String,
      default: "user",
    },
    //this is optional field to store the URL of the user's profile photo
    profilePhoto: {
      type: String,
    },
    //Array to store product IDs for items added to the cart
    cart: [
      {
        type: String,
      },
    ],
    // Token for authentication
    token: {
      type: String,
    },

    // Adds createdAt and updatedAt timestamps automatically
  },
  { timestamps: true }
);

//Exporting the User model
module.exports = mongoose.model("User", userSchema);
