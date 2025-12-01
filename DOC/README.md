# TechStore E-commerce Website

A modern, responsive e-commerce website built with HTML, CSS, and JavaScript for selling electronics and technology products.

## Project Structure


ecommerce-project/
├── index.html              # Homepage
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── products.js         # Product data and display logic
│   ├── cart.js            # Shopping cart functionality
│   └── main.js            # General website functionality
├── pages/
│   ├── products.html      # Product catalog page
│   ├── product-detail.html # Individual product details
│   ├── cart.html          # Shopping cart page
│   ├── about.html         # About us page
│   └── contact.html       # Contact page
├── images/                # Product images (placeholder)
└── README.md             # This file


## Features

### 🏠 Homepage
- Modern hero section with call-to-action
- Featured product categories
- Product showcase
- Newsletter subscription
- Responsive navigation

### 🛍️ Product Catalog
- Grid layout with product cards
- Advanced filtering by category and price
- Search functionality
- Sorting options (name, price, rating)
- Product ratings and reviews

### 📱 Product Details
- Detailed product information
- Image gallery
- Feature lists
- Quantity selection
- Add to cart functionality
- Related products suggestions

### 🛒 Shopping Cart
- Add/remove products
- Quantity management
- Price calculations (subtotal, tax, shipping)
- Local storage persistence
- Checkout form with validation

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Collapsible navigation menu

### ⚡ JavaScript Features
- Dynamic product loading
- Shopping cart management
- Form validation
- Local storage integration
- Search and filtering
- Interactive animations

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Interactive functionality, DOM manipulation
- **Font Awesome**: Icons and visual elements


## Sample Products

The website includes 12 sample products across 4 categories:
- **Smartphones**: iPhone 15 Pro, Samsung Galaxy S24
- **Laptops**: MacBook Pro 14", Dell XPS 13, Gaming Laptop RTX 4070
- **Headphones**: Sony WH-1000XM5, AirPods Pro 2nd Gen
- **Accessories**: iPad Pro, Magic Keyboard, Apple Watch, Wireless Charger, Bluetooth Speaker

## Key Functionality

### Shopping Cart
- Persistent cart using localStorage
- Real-time cart updates
- Quantity management
- Price calculations with tax and shipping
- Checkout process simulation

### Product Management
- Dynamic product display
- Category and price filtering
- Search functionality
- Product detail views
- Related product suggestions

### User Interface
- Smooth animations and transitions
- Loading states
- Form validation
- Notification system
- Mobile-responsive design

## Customization

### Adding New Products
Edit the `products` array in `js/products.js`:
```javascript
{
    id: 13,
    name: "Product Name",
    category: "category",
    price: 299,
    description: "Product description",
    image: "🔌", // Emoji or image URL
    rating: 4.5,
    reviews: 123,
    features: ["Feature 1", "Feature 2"]
}
```

### Styling Customization
- Colors: Edit CSS custom properties in `css/style.css`
- Layout: Modify grid and flexbox properties
- Typography: Update font families and sizes

### Adding New Categories
1. Add category to filter options in HTML
2. Update category cards on homepage
3. Add new products with the category

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Efficient CSS Grid and Flexbox layouts
- Minimal JavaScript for fast loading
- Local storage for cart persistence
- Lazy loading ready (images)
- Optimized animations

## Future Enhancements

- User authentication and accounts
- Product image gallery
- Reviews and ratings system
- Wishlist functionality
- Order tracking
- Payment gateway integration
- Backend API integration
- Product search suggestions
- Advanced filtering (brand, specifications)

## Educational Value

This project demonstrates:
- Modern web development practices
- Responsive design principles
- JavaScript DOM manipulation
- Local storage usage
- Form handling and validation
- CSS Grid and Flexbox
- Mobile-first development
- Clean code organization

Perfect for learning web development fundamentals and building a portfolio project!


Built as a college project demonstrating HTML, CSS, and JavaScript skills.
Icons provided by Font Awesome.
