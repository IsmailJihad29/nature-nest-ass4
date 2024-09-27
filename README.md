<div align="center">
  <h1>NatureNest - Where Nature Thrives, and Your Garden Blossoms</h1>
</div>

---

# Welcome to Nature Nest
https://nature-nest-assign-4.vercel.app/

## Introduction

NatureNest is your go-to online nursery for all your gardening needs. From indoor plants to succulents, we offer a variety of plants that bring nature closer to you, nurturing both your indoor and outdoor spaces.

## Project Description

NatureNest is an e-commerce platform for gardening enthusiasts. It allows users to browse various plant categories, filter by types and prices, add products to the cart, and securely make payments. The goal of this project is to provide a user-friendly interface for buying plants online and making gardening more accessible to everyone.

## Features

- **Product Browsing**: Explore various categories of plants, including indoor plants, outdoor plants, herbs, and succulents.
- **Search Functionality**: Quickly search products by name or description.
- **Filter Options**: Filter products by category, price range, and sort them based on price.
- **Shopping Cart**: Add, remove, and view products in the shopping cart.
- **Stripe Payment Integration**: Secure online payment with Stripe.
- **Responsive Design**: Optimized for all device sizes.

## Technology Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Payment Processing**: Stripe.js
- **State Management**: Redux
- **API Communication**: Axios
- **Authentication**: JSON Web Token (JWT)

## Installation Guideline

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Ensure MongoDB is installed and running)
- Stripe Account (for payment processing)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/naturenest.git
   cd naturenest



Install dependencies for both the frontend and backend:
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install

In the backend directory, create a .env file with the following:
PORT=5000
DB_URL=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
