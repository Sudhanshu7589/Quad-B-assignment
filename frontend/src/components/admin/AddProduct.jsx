import React, { useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { createProduct } from "../../services/apis";
import toast from "react-hot-toast";

function AddProduct() {
  const [formValues, setFormValues] = useState({
    productTitle: "",
    productDescription: "",
    originalPrice: 0,
    discountPrice: 0,
    measurements: "",
    availability: 0,
    category: "Living Room",
  });

  const [files, setFiles] = useState({
    image: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const filesHandler = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({
      ...files,
      [name]: selectedFiles[0], // Use the first file selected
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loading = toast.loading("Loding...");

    // Create FormData object
    const formData = new FormData();
    // Append form values
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });
    // Append files
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    });

    try {
      // Retrieve and parse the token
      const person = JSON.parse(localStorage.getItem("person"));
      const token = person ? person.token : null;
      console.log("Token", token);

      if (!token) {
        toast.error("No token found, user may not be authenticated.");
        console.error("No token found, user may not be authenticated.");
        toast.dismiss(loading);
        return; // Handle the error appropriately (e.g., redirect to login)
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        // Note: Don't set Content-Type for FormData; it will be set automatically
      };

      // Send the form data to the API
      const res = await apiConnector("POST", createProduct, formData, headers);

      console.log("res", res);
      toast.success(res.data.message);

      setFormValues({
        productTitle: "",
        productDescription: "",
        originalPrice: 0,
        discountPrice: 0,
        measurements: "",
        availability: 0,
        category: "Living Room",
      });

      setFiles({ image: null, image1: null, image2: null, image3: null, image4: null });


    } catch (error) {
      console.log("Add product error:", error);
      toast.error(error.response.message);
      toast.dismiss(loading);
    }

    toast.dismiss(loading);
    console.log("Form values submitted:", formValues);
  };

  return (
    <div className="max-w-2xl mx-auto mt-5 bg-slate-300 mb-5 p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="productTitle"
            value={formValues.productTitle}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Description <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="productDescription"
            value={formValues.productDescription}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Original Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="originalPrice"
            value={formValues.originalPrice}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="discountPrice"
            value={formValues.discountPrice}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Measurements <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="measurements"
            value={formValues.measurements}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="availability"
            value={formValues.availability}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={formValues.category}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </div>
        {/* Upload Images */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Images <span className="text-red-500">*</span>
          </label>
          {["image", "image1", "image2", "image3", "image4"].map(
            (imageName, index) => (
              <input
                key={index}
                type="file"
                name={imageName}
                accept="image/*"
                onChange={filesHandler}
                required
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            )
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
