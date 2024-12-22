# E-Commerce Website  

A simple, beginner-friendly e-commerce website built using HTML, CSS, and JavaScript. This project enables users to browse fancy products, search for specific items, and securely purchase them. It also integrates Firebase Authentication to manage user sign-ups and logins using email and password.  

## Features  

1. Product Browsing and Search  
- Users can browse a variety of fancy products available for purchase.  
- A search bar enables users to quickly find specific items using keywords.  

2. Product Purchase  
- Each product has a "Buy Now" or "Add to Cart" option for a seamless shopping experience.  
- The cart dynamically updates with items added by the user.  

3. Firebase Authentication  
- Secure user authentication using Firebase Authentication.  
- Features include:  
  - User registration with email and password.  
  - User login/logout functionality.  
  - Form validation for secure and error-free authentication.  

## Tech Stack  

1. Frontend  
- HTML: Structure of the e-commerce site.  
- CSS: Styling and layout design for a responsive user interface.  
- JavaScript:  
  - Dynamic interaction for the product search and purchase functionalities.  
  - Integration with Firebase Authentication for seamless login and sign-up.  

2. Backend  
- Firebase Authentication: Provides secure authentication services without managing a server.  

## Project Structure  

```
  
│   ├── styles.css    # CSS for styling  
│   ├── app.js     # Main JavaScript logic  
├── index.html        # Home page for browsing products  
├── app.html        # Login page with Firebase integration  
├── commerce.html     # Registration page for new users  
├── firebase.js # Firebase project configuration  
└── README.md         # Project documentation  
```

## How to Run the Project  

1. Clone the repository:  
   git clone https://github.com/Ajayk-programmer/E-Commerce-website.git  
   cd ecommerce-website  

2. Open index.html in your browser to view the site.  

3. Configure Firebase:  
   - Replace the placeholder Firebase configuration in firebase-config.js with your Firebase project details.  

4. Start exploring products, log in, or sign up to make a purchase.  

## Future Enhancements  

- Add a payment gateway for checkout.  
- Integrate a real-time database (Firebase Firestore) to store product and user data.  
- Include user-specific order history and wishlist functionality.  

Feel free to contribute by submitting a pull request or raising issues for new features or bugs.  
