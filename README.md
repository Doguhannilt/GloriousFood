

# GloriousFood

GloriousFood is a modern food ordering application designed to allow users to manage their food orders and securely store their credit card information. The project is built using React Native, Redux, and AsyncStorage.

<div align="center">
<img src="https://github.com/user-attachments/assets/3ade490d-1855-4cbb-9af3-c9b251484f81" width='500'/>
</div>

# VIDEO
<div align="center">
  <video width="auto" src="https://github.com/user-attachments/assets/38748ae8-a9ef-4c60-b55b-1fa32c589cb6" / >
</div>


# IMAGES
<p align="center">

  <img src="https://github.com/user-attachments/assets/b2c4087d-6b2f-47e7-8f2d-06e96a9a4929" alt="Screenshot 2" width="300"/>
  <img src="https://github.com/user-attachments/assets/33a804a0-3854-4a1d-b9c9-27495cfdfb82" alt="Screenshot 3" width="300"/>
  <img src="https://github.com/user-attachments/assets/f6b986b0-89cd-40f1-aa92-85f0348c5d38" alt="Screenshot 4" width="300"/>
  <img src="https://github.com/user-attachments/assets/9f691488-b0c5-4ee5-adb0-1a0c74aa7cf3" alt="Screenshot 5" width="300"/>
  <img src="https://github.com/user-attachments/assets/7362be8e-87d1-4f84-b524-ddc0464238bb" alt="Screenshot 6" width="300"/>
  <img src="https://github.com/user-attachments/assets/a89eeb4e-1a57-44c1-b875-bd92a4f8eb3a" alt="Screenshot 7" width="300"/>
</p>




## Features

- **Order Management:** Users can easily view, increment, decrement, or remove items from their orders.
- **Credit Card Information:** Users can securely save and manage their credit card details.
- **User Management:** JWT for user session management and secure logout.
- **Clean and Modern UI:** A stylish user interface with purple tones for an enhanced visual experience.

## Technologies

- **React Native:** Framework for building mobile applications.
- **Redux:** For managing application state.
- **AsyncStorage:** For storing user data.
- **React Native Credit Card Input:** For collecting credit card information.


### React Native

| Package Name                               | Version     | Description                                    |
|-----------------------------------------|-----------|---------------------------------------------|
| `@expo/metro-runtime`                  | 3.2.1     | Metro runtime for Expo                      |
| `@react-native-async-storage/async-storage` | 1.24.0   | Asynchronous storage for React Native       |
| `@react-navigation/native`             | 6.1.18    | React Navigation for managing navigation    |
| `@react-navigation/native-stack`       | 6.11.0    | Stack navigator for React Navigation        |
| `@reduxjs/toolkit`                     | 2.2.7     | Redux toolkit for state management          |
| `axios`                                | 1.7.3     | HTTP client for making requests             |
| `expo`                                 | 51.0.23   | Expo SDK for React Native                    |
| `expo-status-bar`                      | 1.12.1    | Status bar for Expo apps                    |
| `nativewind`                           | 2.0.11    | Tailwind CSS utilities for React Native     |
| `react`                                | 18.2.0    | React library                               |
| `react-dom`                            | 18.2.0    | DOM bindings for React                      |
| `react-native`                         | 0.74.3    | React Native framework                      |
| `react-native-credit-card-input`        | 1.0.0     | Credit card input component for React Native|
| `react-native-dotenv`                   | 3.4.11    | Environment variables for React Native      |
| `react-native-heroicons`                | 4.0.0     | Heroicons for React Native                  |
| `react-native-safe-area-context`        | 4.10.5    | Safe area context for React Native          |
| `react-native-screens`                  | 3.31.1    | Screens for React Native                    |
| `react-native-svg`                     | 15.4.0    | SVG support for React Native                |
| `react-native-toast-message`            | 2.2.0     | Toast messages for React Native             |
| `react-native-vector-icons`              | 10.1.0    | Vector icons for React Native               |
| `react-native-web`                     | 0.19.10   | Web support for React Native                |
| `react-redux`                          | 9.1.2     | React bindings for Redux                    |
| `tailwindcss`                          | 3.3.2     | Tailwind CSS for styling                    |
| `@babel/core`                          | 7.20.0    | Babel core for transpiling                  |

### Backend

| Paket Adı                               | Sürüm     | Açıklama                                    |
|-----------------------------------------|-----------|---------------------------------------------|
| `bcryptjs`                            | 2.4.3     | Password hashing                            |
| `cookie-parser`                       | 1.4.6     | Cookie parsing middleware for Express       |
| `cors`                                | 2.8.5     | CORS middleware for Express                 |
| `dotenv`                              | 16.4.5    | Environment variables for Node.js           |
| `express`                             | 4.19.2    | Web framework for Node.js                   |
| `express-async-handler`               | 1.2.0     | Async handler for Express                   |
| `express-formidable`                  | 1.2.0     | Middleware for handling form data           |
| `jsonwebtoken`                        | 9.0.2     | JWT for authentication                      |
| `mongoose`                            | 8.5.2     | MongoDB ODM for Node.js                     |
| `multer`                              | 1.4.5-lts.1| Middleware for handling file uploads       |
| `nodemon`                             | 3.1.4     | Development server for Node.js              |
| `react-native-dotenv`                 | 3.4.11    | Environment variables for React Native (also used in backend for consistency) |

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/gloriousfood.git
   cd gloriousfood
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   // FRONTEND
   URL=https://yourapiurl.com
   ```
   ```plaintext
   // Backend
    JWT_SECRET=your_jwt_secret_key
    NODE_ENV=your_node_env
   ```

4. **Run the Application**

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:

   ```bash
   npx react-native run-android
   ```

## Usage

1. **Card Management**

   - Navigate to the Cards screen to enter and save your credit card information.
   - The information is securely stored and displayed after saving.

2. **Order Management**

   - On the Orders screen, you can view your current orders.
   - You can increment or decrement the quantity of each item or remove them as needed.
   - The total cost is updated in real-time.

3. **User Management**

   - JWT is used for session management. Ensure to log in to save your card information securely.
   - Logging out will clear the card information and end the session.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the React Native team for the powerful framework.
- Special thanks to the open-source contributors for their libraries and tools.


## DONE

### React Native Development

- **Initial Setup and Configuration**
  - Utilized Tailwind CSS for styling.
  - Configured Expo navigation to create a seamless user experience.
  - Gained an understanding of npm and npx core concepts.

- **Home Page & Search Functionality**
  - Developed the Home Page template.
  - Implemented a search functionality through `Search.js`.
  - Understood and applied React props mechanics.
  - Created and integrated categories into the application.
  - Established a fake category database (`Category.js` in the Library folder).
  - Developed a database for the Featured Rows section:
    - **Offers For You Tab**:
      - Included attributes: `id`, `title`, `description`, and image.
      - Database: `Offers.js` (JSON) with attributes: image, title, rating icon, and location.
    - **Featured Tab**:
      - Included attributes: `id`, `title`, `description`, and image.
      - Database: `FeaturedTab.js` (JSON) with attributes: image, title, rating icon, and location.
    - **Tasty Discounts**:
      - Included attributes: `id`, `title`, `description`, and image.
      - Database: `TastyDiscounts.js` (JSON) with attributes: image, title, rating icon, and location.

- **Redux Integration**
  - Added Redux for state management.
  - Created Redux components for handling state.
  - Implemented Redux to manage information related to the selected restaurant.
  - Developed a detailed page (`DETAILS PAGE`) using Redux for state management.
  - Designed a modern user interface with Tailwind CSS.
  - Created sections: Header, Menu, and Information.

- **Redux Payment Configuration**
  - Configured Redux for managing payment state, including selected orders and total costs.
  - Implemented functionality to clear the payment state when needed.
  - Added conditional rendering to display an order icon on the main page if there are selected orders.

- **Order Page Development**
  - Developing an order page to display:
    - **A)** All selected orders and their associated costs.
    - **B)** Total payment amount.
    - **C)** Option to delete payments by ID.
      
- **Search Bar Development**
  - Creating a dynamic search bar
 
- **Creating A Database**
    - Implement a login system to allow users to manage their accounts securely.
    - I will create a database with the help of the MongoDB
 
- **Redux&User Process**
  - I will use RTK Query, JWT for the front-end, Express | Mongoose for the back-end 
  - When you can log in to the app, you can order; otherwise, it will be impossible. (*)
  - When you log in to the app, there are going to be three options: *Profile*, *Cards*, and Log out. I will use JWT and Redux.
  - Your card information will be taken by the Redux 
  - And all your information will be stored in the JWT 

-**Validation**
  - You can't go to the Pages [Order, Payment, OrderList] if you are not logged in

---

## IN PROCESS

Nothing yet...


