const mongoose = require("mongoose");

// Define the RatingAndReview schema
const ratingAndReviewSchema = new mongoose.Schema({
  // Reference to the user who posted the review, linked by user ID
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // Rating given by the user
  rating: {
    type: Number,
    required: true,
  },
  //review give by the user
  review: {
    type: String,
    required: true,
  },
  //reference to the course being reviewd
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
    index: true,
  },
});

// Export the RatingAndReview model
export const RatingAndReview = mongoose.model(
  "RatingAndReview",
  ratingAndReviewSchema
);
