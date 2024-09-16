# E-Commerce Application
*Overview*


## Contributors

- *Deen Bandhu Singh* [GitHub Profile](https://github.com/deen-2k3)
- *Nitish Kumar* [GitHub Profile](https://github.com/nitish76kumar)
- *Ramavtar Kumar Yadav* [GitHub Profile](https://github.com/ramavtar8250)
- *Sudhanshu Shekhar* [GitHub Profile](https://github.com/Sudhanshu7589)


This project is a basic e-commerce application demonstrating proficiency in both frontend and backend development. It includes user authentication, product listing, and a shopping cart. The application integrates a MongoDB database and provides a RESTful API with secure endpoints using Node.js and Express.

## Features

*User Authentication:* Register, log in, and authenticate users with JWT.

*Product Management:* List, view, add, update, and delete products.

*Shopping Cart:* Add items to the cart, view the cart, and remove items.

*State Management:* Handle authentication and cart state using Redux.

*Routing:* Navigate between pages using React Router.
Optional Features: Order management, product search, and filtering.



## Backend Development

### API Endpoints

### User Authentication

*POST /register:* Register a new user.

Request body:

json

{
  "username": "string",

  "password": "string",

  "email": "string"

}

*POST /login:* Authenticate a user and return a JWT.

Request body:

json

{
  "username": "string",

  "password": "string"
}

## Product Management

*GET /products:* 
Retrieve a list of products.

*GET /products/:id:* Retrieve details of a specific product.

*POST /products:* Add a new product (admin only).

Request body:

json

{
  "name": "string",

  "price": "number",

  "description": "string",

  "category": "string",

  "discountPrice": "number"

}
*PUT/products/:id:* Update an existing product (admin only).

Request body:

json

{
  "name": "string",

  "price": "number",

  "description": "string",

  "category": "string",

  "discountPrice": "number"
}

*DELETE /products/:id:* Delete a product (admin only).
Shopping Cart

*GET /cart:* Retrieve the user's shopping cart.
POST /cart: Add an item to the cart.

Request body:

json

{
  "productId": "string",
  "quantity": "number"
}
*DELETE /cart/:itemId:* Remove an item from the cart.

## Database

*MongoDB:* Used to store user information, product data, and shopping cart details.

*Schema Design:* Proper schema design with relationships between users, products, and carts.

## Authentication & Authorization

*JWT:* Used for user authentication.

*Middleware:* Protects routes for admin-only actions (e.g., adding, updating, deleting products).

## Frontend Development

## React Application

*AuthForm:* 
Registration and login forms.

*ProductList:* Displays a list of products.

*ProductDetail:* Shows details of a selected product.

*Cart:* Displays the user's shopping cart and allows item removal.


## State Management

*Redux:* Manages user authentication state and shopping cart state.

## Routing

*React Router:* Manages navigation between pages (e.g., home, product details, cart, login).

## Functionality

## User Authentication:

*Register, log in, and log out.* Authenticated users can interact with their cart.

*Product Management:* Users can view products and detailed information. Admins can add, update, and delete products.
Shopping Cart: Users can add products to the cart and remove items.


## Backend

### Install Dependencies:


*npm install*

*Set Environment Variables:*

Create a .env file in the root directory with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


*Run the Server:*

#### npm start


## Frontend
*Install Dependencies:*

### npm install

*Run the Development Server:*
### npm start


## Contributing

Feel free to fork this repository and submit pull requests. For any issues or feature requests, please open an issue on GitHub.
