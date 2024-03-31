# Rainbow Interview Challenge App Features

## Video Demonstration

- [Watch the video demonstration](https://drive.google.com/file/d/1EKIZGxgAFJ_yAyIxWXbcAr2_gMAj6aE7/view?usp=sharing)

## Introduction

This application is built on top of React Native using TypeScript, employing Redux Toolkit for state management, React Navigation for navigation, and Redux Persist for state persistence.

## Customized App Icon and Splash Screen Logo

- Customized app icon and splash screen logo design.

  - <img src="screenshots/splash.png" alt="Login" width="220" style="margin-top: 20px; margin-bottom: 20px;"F/>

## UI/UX Inspiration from Dribbble

- User interface and user experience design inspired by Dribbble.

## Auth Screens (powered by Beecepter Mock Service):

- Proper navigation setup to handle user routes based on authentication status.

  - <img src="screenshots/Login.png" alt="Login" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Features signup and login functionalities.
- Users can upload an image during signup and update their profile (Powered by ByteScale Hosting).

  - <img src="screenshots/Signup.png" alt="Signup" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- User offline persistence using Redux Persist.
- Proper authentication server and logic implemented.

  - <img src="screenshots/Login_loading.png" alt="Login Loading" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

## Product Screen (Powered by DummyJson Rest API Service)

- Interactive UI/UX design for the product listing page.
- Sort products by different categories.

  - <img src="screenshots/products.png" alt="Products" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Proper pagination support with Skeleton loading.

  - <img src="screenshots/products_loading.png" alt="Products Loading" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Search products by name.

  - <img src="screenshots/products_search.png" alt="Products Search" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Users can add/remove items from the cart.

  - <img src="screenshots/item_added.png" alt="Item Added" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Pull to refresh and Pagination.

  - <img src="screenshots/pull_to_refresh.png" alt="Item Added" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>
  - <img src="screenshots/pagination.png" alt="Item Added" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

## Product Details Screen

- Details screen to show Product Details
- Add to Cart option

  - <img src="screenshots/product_details.png" alt="Products" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

## Cart Screen (Powered by Beecepter Rest API service):

- View items added to the cart.
- Add/remove items.
- Manage items quantity.

  - <img src="screenshots/cart.png" alt="Cart" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Check the total of all items.
- Ability to checkout and place order (Stored at Beecepter using customized JSON format).
- Cart persistence even after the app is closed.

  - <img src="screenshots/order_placed.png" alt="Order Placed" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Checkout Popup and Placing Order Indicator

  - <img src="screenshots/checkout_screen.png" alt="Order Placed" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

  - <img src="screenshots/order_placing.png" alt="Order Placed" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

## Update Profile Screen

- Update Full Name, Profile Image, and Password.

  - <img src="screenshots/profile_updated.png" alt="Profile Updated" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

- Ability to update the profile.
- Ability to Logout from the App.

  - <img src="screenshots/user profile.png" alt="User Profile" alt="User Profile" width="220" style="margin-top: 20px; margin-bottom: 20px;"/>

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
