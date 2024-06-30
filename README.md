## Product Listing App

This is a dynamic Product Listing Application developed using Next.js, React, and TypeScript. The app initially loads 20 products from the server side and utilizes infinite scroll to load additional batches of 20 products as the user scrolls down. Each product includes a "Buy Now" button that directs users to a payment page featuring a simple form with Zod validation, masked inputs using `react-input-mask`, and form management via `react-hook-form`.

### Live Demo

You can view a live demo of the app here: [Product Listing App](https://react-rails-products-listing-assignment.vercel.app/)

### Features

- **Server-Side Rendering**: Initial load of 20 products to ensure fast page loads and SEO optimization.
- **Infinite Scroll**: Smooth and continuous product loading as you scroll, enhancing user experience.
- **Payment Integration**: Each product includes a direct "Buy Now" option that leads to a secure payment form.
- **Form Validation**: Robust form validation using Zod and masked input fields for enhanced data integrity.
- **Responsive Design**: Fully responsive layout suitable for a wide range of devices.

### Pre-requisites

To run this project locally, you will need:

- NextJS (14.2.4)
- Node.js (v18.x or later)
- npm (v8.x or later)
- A modern web browser

### Installation

Follow these steps to get the application running on your local machine:

1. **Clone the repository**
   ```bash
   git clone git@github.com:ali-ehmed/react-rails-products-listing-assignment.git
   cd react-rails-products-listing-assignment.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.