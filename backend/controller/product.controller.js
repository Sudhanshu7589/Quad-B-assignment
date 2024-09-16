const Product = require("../models/product.model");
const { uploadImageToCloudinary } = require("../utils/imageUploader"); // Assuming you have a function for image upload
const cloudinary = require("cloudinary").v2; // Ensure Cloudinary is configured
// Controller to create a new product

exports.createProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productDescription,
      originalPrice,
      discountPrice,
      measurements,
      availability,
      category,
    } = req.body;

    //console.log("heloo......",productTitle);
    // Check if all required fields are provided

    if (
      !productTitle ||
      !productDescription ||
      !originalPrice ||
      !discountPrice ||
      !measurements ||
      !availability ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    // Check if at least one image file is uploaded
    console.log("filee.................", req.files);

    if (!req.files) {
      return res.status(400).json({
        success: false,
        message: "No image file uploaded.",
      });
    }
    // Array to hold URLs of uploaded images

    let arr = [];
    const img1 = await uploadImageToCloudinary(
      req.files.image,
      process.env.FOLDER_NAME
    );
    if (req.files.image1) {
      const img2 = await uploadImageToCloudinary(
        req.files.image1,
        process.env.FOLDER_NAME
      );
      arr.push(img2.secure_url);
    }
    if (req.files.image2) {
      const img3 = await uploadImageToCloudinary(
        req.files.image2,
        process.env.FOLDER_NAME
      );
      arr.push(img3.secure_url);
    }

    if (req.files.image3) {
      const img4 = await uploadImageToCloudinary(
        req.files.image3,
        process.env.FOLDER_NAME
      );
      arr.push(img4.secure_url);
    }

    if (req.files.image4) {
      const img5 = await uploadImageToCloudinary(
        req.files.image4,
        process.env.FOLDER_NAME
      );
      arr.push(img5.secure_url);
    }

    arr.push(img1.secure_url);

    // Create product
    const product = await Product.create({
      productTitle,
      productDescription,
      originalPrice,
      discountPrice,
      measurements,
      availability,
      category,
      productImages: arr,
    });
    // Respond with success and product details

    return res.status(201).json({
      message: "Product created successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Controller to get all products

exports.getAllProduct = async (req, res) => {
  try {
    const allProduct = await Product.find({});
    // console.log(allProduct);
    return res.status(201).json({
      message: "All product get successfully.",
      success: true,
      allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: " server error can not add product please try again..",
    });
  }
};
// Controller to get products by category

exports.getCategoryProduct = async (req, res) => {
  try {
    const { category } = req.body;
    // Find products by category

    const response = await Product.find({ category: category });
    console.log(response);
    return res.status(201).json({
      message: "All product get successfully.",
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
// Controller to delete a product

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    // Check if productId is provided
    if (!productId) {
      return res.status(401).json({
        message: "Product ID is required.",
        success: false,
      });
    }

    // Attempt to delete the product by ID
    const deletedProduct = await Product.findByIdAndDelete(productId);

    // If the product is not found
    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found.",
        success: false,
      });
    }

    // If the product is deleted successfully
    res.status(200).json({
      message: "Product deleted successfully.",
      success: true,
      data: deletedProduct,
    });
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({
      message: "An error occurred while deleting the product.",
      success: false,
      error: error.message,
    });
  }
};
