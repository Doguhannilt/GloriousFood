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

---

## IN PROCESS

### Order Management and Payment Configuration

- **Redux Payment Configuration**
  - Configured Redux for managing payment state, including selected orders and total costs.
  - Implemented functionality to clear the payment state when needed.
  - Added conditional rendering to display an order icon on the main page if there are selected orders.

- **Order Page Development**
  - Developing an order page to display:
    - **A)** All selected orders and their associated costs.
    - **B)** Total payment amount.
    - **C)** Option to delete payments by ID.

---

## Future Enhancements

- Implement a login system to allow users to manage their accounts securely.
- Add functionality to enable users to mark items as favorites for easy access.
- Refine UI/UX based on user feedback.
- Expand functionality with additional features.
- Optimize performance and ensure cross-platform compatibility.

