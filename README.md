# Rainbow Interview Challenge App

## Video Demonstration

- [Watch the Video Demonstration](https://drive.google.com/file/d/1EKIZGxgAFJ_yAyIxWXbcAr2_gMAj6aE7/view?usp=sharing)

## Introduction

The Rainbow Interview Challenge App is developed using React Native with TypeScript. It utilizes Redux Toolkit for state management, React Navigation for navigation, and Redux Persist for state persistence.

## Customized App Icon and Splash Screen Logo

- Customized app icon and splash screen logo design.
  - ![Splash Screen](screenshots/splash.png)

## UI/UX Inspiration from Dribbble

- UI/UX design inspired by Dribbble.

## Authentication Screens (powered by Beecepter Mock Service):

- Proper navigation setup for user routes based on authentication status.
- Includes signup and login functionalities.
- Users can upload an image during signup and update their profile.
- User offline persistence using Redux Persist.
- Implemented proper authentication server and logic.

### Screenshots

- ![Login](screenshots/Login.png)
- ![Signup](screenshots/Signup.png)
- ![Login Loading](screenshots/Login_loading.png)

## Product Screen (Powered by DummyJson Rest API Service)

- Interactive UI/UX design for the product listing page.
- Sort products by different categories.
- Proper pagination support with Skeleton loading.
- Search products by name.
- Users can add/remove items from the cart.
- Pull to refresh and Pagination.

### Screenshots

- ![Products](screenshots/products.png)
- ![Products Loading](screenshots/products_loading.png)
- ![Products Search](screenshots/products_search.png)
- ![Item Added](screenshots/item_added.png)
- ![Pull to Refresh](screenshots/pull_to_refresh.png)
- ![Pagination](screenshots/pagination.png)

## Product Details Screen

- Details screen to show Product Details
- Add to Cart option

### Screenshot

- ![Product Details](screenshots/product_details.png)

## Cart Screen (Powered by Beecepter Rest API service):

- View items added to the cart.
- Add/remove items.
- Manage items quantity.
- Check the total of all items.
- Ability to checkout and place order.
- Cart persistence even after the app is closed.
- Checkout Popup and Order placement loader.

### Screenshots

- ![Cart](screenshots/cart.png)
- ![Order Placed](screenshots/checkout_screen.png)
- ![Order Placing](screenshots/order_placing.png)
- ![Order Placed](screenshots/order_placed.png)

## Update Profile Screen

- Update Full Name, Profile Image, and Password.
- Ability to update the profile.
- Ability to Logout from the App.

### Screenshots

- ![User Profile](screenshots/user_profile.png)
- ![Profile Updated](screenshots/profile_updated.png)

## Atomic Design Pattern

I decided to implement the atomic design pattern in this project because it offers several advantages in terms of scalability, maintainability, and reusability. Essentially, atomic design involves breaking down UI components into smaller, reusable elements such as atoms, molecules, organisms, templates, and pages. This approach promotes consistency and modular development, which makes it easier to manage and scale projects over time.

### Design Inspiration

- Most of the Design inspiration taken from Dribbble.
- Products page UI is based on the provided screenshot.

  - <img src="screenshots/inspiration.jpg" alt="Products" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- I had almost finished designing a similar UI for the product display. However, I had to modify it to fit the available data through API.

  - <img src="screenshots/initial_design.png" alt="Profile Updated" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

### Environment File

Please make sure to add an `.env` file in the root folder of the project. This file should contain necessary environment variables, particularly for APIs to function properly.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run the app — you can also run it directly from within Android Studio and Xcode respectively.

### Author

- @syedhaider03
