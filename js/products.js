// Sample product data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "smartphones",
        price: 999,
        description: "Latest iPhone with advanced A17 Pro chip and titanium design.",
        image: "📱",
        rating: 4.8,
        reviews: 234,
        features: [
            "A17 Pro chip with 6-core GPU",
            "128GB Storage",
            "Pro camera system",
            "Titanium build",
            "USB-C connector"
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "smartphones",
        price: 899,
        description: "Powerful Android smartphone with AI-enhanced photography.",
        image: "📱",
        rating: 4.6,
        reviews: 189,
        features: [
            "Snapdragon 8 Gen 3",
            "256GB Storage",
            "50MP Triple camera",
            "6.2-inch Dynamic AMOLED",
            "All-day battery life"
        ]
    },
    {
        id: 3,
        name: "MacBook Pro 14\"",
        category: "laptops",
        price: 1999,
        description: "Professional laptop with M3 chip for ultimate performance.",
        image: "💻",
        rating: 4.9,
        reviews: 156,
        features: [
            "Apple M3 Pro chip",
            "512GB SSD",
            "14-inch Liquid Retina XDR",
            "18-hour battery life",
            "Thunderbolt 4 ports"
        ]
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "laptops",
        price: 1299,
        description: "Ultra-portable laptop with stunning InfinityEdge display.",
        image: "💻",
        rating: 4.5,
        reviews: 203,
        features: [
            "Intel Core i7-1360P",
            "16GB LPDDR5 RAM",
            "13.4-inch FHD+ display",
            "512GB SSD",
            "Ultra-slim design"
        ]
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "headphones",
        price: 399,
        description: "Industry-leading noise canceling headphones with premium sound.",
        image: "🎧",
        rating: 4.7,
        reviews: 445,
        features: [
            "Industry-leading noise canceling",
            "30-hour battery life",
            "Crystal clear hands-free calling",
            "Multipoint connection",
            "Premium comfort"
        ]
    },
    {
        id: 6,
        name: "AirPods Pro 2nd Gen",
        category: "headphones",
        price: 249,
        description: "Wireless earbuds with active noise cancellation and spatial audio.",
        image: "🎧",
        rating: 4.6,
        reviews: 332,
        features: [
            "Active Noise Cancellation",
            "Spatial Audio",
            "6 hours listening time",
            "MagSafe charging case",
            "Sweat and water resistant"
        ]
    },
    {
        id: 7,
        name: "iPad Pro 12.9\"",
        category: "accessories",
        price: 1099,
        description: "Most advanced iPad with M2 chip and stunning Liquid Retina display.",
        image: "📲",
        rating: 4.8,
        reviews: 178,
        features: [
            "Apple M2 chip",
            "12.9-inch Liquid Retina XDR",
            "128GB Storage",
            "Apple Pencil support",
            "All-day battery life"
        ]
    },
    {
        id: 8,
        name: "Magic Keyboard",
        category: "accessories",
        price: 179,
        description: "Wireless keyboard with numeric keypad and rechargeable battery.",
        image: "⌨️",
        rating: 4.4,
        reviews: 267,
        features: [
            "Scissor mechanism keys",
            "Numeric keypad",
            "Rechargeable battery",
            "Bluetooth connectivity",
            "Sleek aluminum design"
        ]
    },
    {
        id: 9,
        name: "Apple Watch Series 9",
        category: "accessories",
        price: 429,
        description: "Advanced smartwatch with health monitoring and fitness tracking.",
        image: "⌚",
        rating: 4.7,
        reviews: 298,
        features: [
            "S9 SiP chip",
            "Blood oxygen monitoring",
            "ECG app",
            "Always-On Retina display",
            "Water resistant to 50 meters"
        ]
    },
    {
        id: 10,
        name: "Gaming Laptop RTX 4070",
        category: "laptops",
        price: 1599,
        description: "High-performance gaming laptop with RTX 4070 graphics.",
        image: "💻",
        rating: 4.6,
        reviews: 134,
        features: [
            "NVIDIA RTX 4070",
            "Intel Core i7-13700H",
            "16GB DDR5 RAM",
            "1TB NVMe SSD",
            "15.6-inch 144Hz display"
        ]
    },
    {
        id: 11,
        name: "Wireless Charger",
        category: "accessories",
        price: 59,
        description: "Fast wireless charging pad compatible with all Qi devices.",
        image: "🔌",
        rating: 4.3,
        reviews: 189,
        features: [
            "15W fast wireless charging",
            "Qi-certified",
            "LED charging indicator",
            "Non-slip surface",
            "Compact design"
        ]
    },
    {
        id: 12,
        name: "Bluetooth Speaker",
        category: "accessories",
        price: 129,
        description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
        image: "🔊",
        rating: 4.5,
        reviews: 223,
        features: [
            "360-degree sound",
            "12-hour battery life",
            "Waterproof IPX7",
            "Voice assistant support",
            "Compact and portable"
        ]
    }
];

// Product display functions
function createProductCard(product, isDetailView = false) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.setAttribute('data-product-id', product.id);
    
    if (isDetailView) {
        card.innerHTML = `
            <div class="product-detail-image">
                <span>${product.image}</span>
            </div>
            <div class="product-detail-info">
                <h1>${product.name}</h1>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <div class="product-detail-price">$${product.price}</div>
                <div class="product-detail-description">
                    <p>${product.description}</p>
                </div>
                <div class="product-detail-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <div class="quantity-controls">
                        <button type="button" onclick="changeQuantity(-1)">-</button>
                        <input type="number" value="1" min="1" max="10" id="quantity-input">
                        <button type="button" onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, document.getElementById('quantity-input').value)">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-outline" onclick="window.history.back()">
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <div class="product-image">
                <span>${product.image}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-outline btn-small" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `;
    }
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function displayProducts(productsToShow = products, containerId = 'featured-products') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (productsToShow.length === 0) {
        container.innerHTML = '<div class="text-center">No products found matching your criteria.</div>';
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function displayFeaturedProducts() {
    // Show only featured products (first 6)
    const featuredProducts = products.slice(0, 6);
    displayProducts(featuredProducts, 'featured-products');
}

function displayAllProducts() {
    displayProducts(products, 'products-grid');
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter')?.value || 'all';
    const priceFilter = document.getElementById('price-filter')?.value || 'all';
    const sortFilter = document.getElementById('sort-filter')?.value || 'name';
    const searchTerm = document.getElementById('search-input')?.value?.toLowerCase() || '';
    
    let filteredProducts = [...products];
    
    // Category filter
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Price filter
    if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(p => p.replace('+', ''));
        filteredProducts = filteredProducts.filter(product => {
            if (priceFilter.includes('+')) {
                return product.price >= parseInt(min);
            }
            return product.price >= parseInt(min) && product.price <= parseInt(max);
        });
    }
    
    // Search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort products
    filteredProducts.sort((a, b) => {
        switch (sortFilter) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    displayProducts(filteredProducts, 'products-grid');
}

function clearFilters() {
    document.getElementById('category-filter').value = 'all';
    document.getElementById('price-filter').value = 'all';
    document.getElementById('sort-filter').value = 'name';
    document.getElementById('search-input').value = '';
    displayAllProducts();
}

function viewProduct(productId) {
    // Store the product ID in sessionStorage for the detail page
    sessionStorage.setItem('currentProductId', productId);
    window.location.href = 'product-detail.html';
}

function displayProductDetail() {
    const productId = parseInt(sessionStorage.getItem('currentProductId'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('product-detail').innerHTML = '<div class="text-center">Product not found.</div>';
        return;
    }
    
    const container = document.getElementById('product-detail');
    const productCard = createProductCard(product, true);
    
    container.innerHTML = '';
    container.appendChild(productCard);
    
    // Update page title
    document.title = `${product.name} - TechStore`;
    
    // Display related products
    displayRelatedProducts(product);
}

function displayRelatedProducts(currentProduct) {
    const relatedProducts = products
        .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
        .slice(0, 4);
    
    displayProducts(relatedProducts, 'related-products');
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity-input');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, Math.min(10, currentValue + change));
    quantityInput.value = newValue;
}

// Category click handlers
function handleCategoryClick() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            sessionStorage.setItem('selectedCategory', category);
            window.location.href = 'pages/products.html';
        });
    });
}

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = searchInput?.nextElementSibling;
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            sessionStorage.setItem('searchTerm', searchTerm);
            if (window.location.pathname.includes('products.html')) {
                filterProducts();
            } else {
                window.location.href = window.location.pathname.includes('pages/') ? 'products.html' : 'pages/products.html';
            }
        }
    }
    
    searchButton?.addEventListener('click', performSearch);
    searchInput?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Initialize products based on current page
function initializeProducts() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('product-detail.html')) {
        displayProductDetail();
    } else if (currentPage.includes('products.html')) {
        // Check for category or search from sessionStorage
        const selectedCategory = sessionStorage.getItem('selectedCategory');
        const searchTerm = sessionStorage.getItem('searchTerm');
        
        if (selectedCategory) {
            document.getElementById('category-filter').value = selectedCategory;
            sessionStorage.removeItem('selectedCategory');
        }
        
        if (searchTerm) {
            document.getElementById('search-input').value = searchTerm;
            sessionStorage.removeItem('searchTerm');
        }
        
        displayAllProducts();
        
        // Set up filter event listeners
        document.getElementById('category-filter')?.addEventListener('change', filterProducts);
        document.getElementById('price-filter')?.addEventListener('change', filterProducts);
        document.getElementById('sort-filter')?.addEventListener('change', filterProducts);
        document.getElementById('clear-filters')?.addEventListener('click', clearFilters);
        document.getElementById('search-input')?.addEventListener('input', filterProducts);
        
        // Apply initial filters if any
        if (selectedCategory || searchTerm) {
            filterProducts();
        }
    } else {
        // Homepage - display featured products
        displayFeaturedProducts();
        handleCategoryClick();
    }
    
    handleSearch();
}

// Utility function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProducts);
