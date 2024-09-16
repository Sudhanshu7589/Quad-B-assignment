const mongoose = require("mongoose");
require("dotenv").config();

//function to connect  the mongoDB database
exports.connect = () => {
  //attempt to connect to database
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connection Successful")) // Log success message if connection is successful

    .catch((error) => {
      console.log("DB Connection Issues"); // Log failure message if connection fails

      console.error(error);
      process.exit(1);
    });
};
