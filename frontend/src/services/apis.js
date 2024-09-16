const baseUrl = "http://localhost:4000/api/v1/";

// authencation url

export const loginUrl = baseUrl + "auth/login";
export const signupUrl = baseUrl + "auth/register";
export const logoutUr = baseUrl + "auth/logout";
export const forgotPasswordUrl = baseUrl + "auth/forgotPassword";

// Product API

export const createProduct = baseUrl + "product/createProduct";
export const getAllProduct = baseUrl + "product/getAllProduct";
export const deleteProduct = baseUrl + "product/deleteProduct";
export const getProductByCategory = baseUrl + "product/getProductByCategory";
