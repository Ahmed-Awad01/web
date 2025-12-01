// Cart management functionality
class ShoppingCart {
    constructor() {
        this.items = this.loadCartFromStorage();
        this.updateCartDisplay();
    }

    loadCartFromStorage() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCartToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    addItem(productId, quantity = 1) {
        const product = getProductById(productId);
        if (!product) return false;

        const existingItem = this.items.find(item => item.productId === productId);
        
        if (existingItem) {
            existingItem.quantity += parseInt(quantity);
        } else {
            this.items.push({
                productId: productId,
                quantity: parseInt(quantity),
                price: product.price,
                name: product.name,
                image: product.image
            });
        }

        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showAddToCartNotification(product.name);
        return true;
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.productId !== productId);
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.displayCartItems();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.productId === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = parseInt(quantity);
                this.saveCartToStorage();
                this.updateCartDisplay();
                this.displayCartItems();
            }
        }
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTax() {
        return this.getSubtotal() * 0.08; // 8% tax
    }

    getShipping() {
        return this.getSubtotal() > 100 ? 0 : 9.99;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax() + this.getShipping();
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = this.getTotalItems();
        }
    }

    displayCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartEmpty = document.getElementById('cart-empty');
        const cartSummary = document.getElementById('cart-summary');

        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartEmpty.style.display = 'block';
            cartItemsContainer.style.display = 'none';
            cartSummary.style.display = 'none';
            return;
        }

        cartEmpty.style.display = 'none';
        cartItemsContainer.style.display = 'block';
        cartSummary.style.display = 'block';

        cartItemsContainer.innerHTML = '';

        this.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <span>${item.image}</span>
                </div>
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Unit price: $${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="cart.updateQuantity(${item.productId}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="cart.updateQuantity(${item.productId}, ${item.quantity + 1})">+</button>
                    <button onclick="cart.removeItem(${item.productId})" style="margin-left: 1rem; color: #e74c3c;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-price">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        this.updateCartSummary();
    }

    updateCartSummary() {
        const subtotalEl = document.getElementById('subtotal');
        const taxEl = document.getElementById('tax');
        const shippingEl = document.getElementById('shipping');
        const totalEl = document.getElementById('total');

        if (subtotalEl) subtotalEl.textContent = `$${this.getSubtotal().toFixed(2)}`;
        if (taxEl) taxEl.textContent = `$${this.getTax().toFixed(2)}`;
        if (shippingEl) shippingEl.textContent = `$${this.getShipping().toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${this.getTotal().toFixed(2)}`;
    }

    showAddToCartNotification(productName) {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.className = 'alert alert-success';
        notification.style.position = 'fixed';
        notification.style.top = '100px';
        notification.style.right = '20px';
        notification.style.zIndex = '2000';
        notification.style.maxWidth = '300px';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i> 
            ${productName} added to cart!
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    clearCart() {
        this.items = [];
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.displayCartItems();
    }
}

// Global cart instance
const cart = new ShoppingCart();

// Global functions for use in HTML onclick attributes
function addToCart(productId, quantity = 1) {
    cart.addItem(productId, quantity);
}

function removeFromCart(productId) {
    cart.removeItem(productId);
}

function updateCartQuantity(productId, quantity) {
    cart.updateQuantity(productId, quantity);
}

// Checkout functionality
function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModal = document.getElementById('close-modal');
    const checkoutForm = document.getElementById('checkout-form');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.items.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            checkoutModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            checkoutModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    if (checkoutModal) {
        checkoutModal.addEventListener('click', function(e) {
            if (e.target === checkoutModal) {
                checkoutModal.style.display = 'none';
            }
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processCheckout();
        });
    }
}

function processCheckout() {
    // Simulate order processing
    const formData = new FormData(document.getElementById('checkout-form'));
    const orderData = {
        items: cart.items,
        total: cart.getTotal(),
        customerInfo: Object.fromEntries(formData),
        orderDate: new Date().toISOString(),
        orderId: 'ORD-' + Date.now()
    };

    // Show success message
    alert(`Order placed successfully! Order ID: ${orderData.orderId}\nTotal: $${orderData.total.toFixed(2)}`);
    
    // Clear cart
    cart.clearCart();
    
    // Close modal
    document.getElementById('checkout-modal').style.display = 'none';
    
    // Redirect to products page
    window.location.href = 'products.html';
}

// Format card number input
function formatCardNumber(input) {
    let value = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formattedValue;
}

function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

// Initialize cart functionality when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Display cart items if on cart page
    if (window.location.pathname.includes('cart.html')) {
        cart.displayCartItems();
    }
    
    // Initialize checkout functionality
    initializeCheckout();
    
    // Add input formatters for checkout form
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');
    
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            formatCardNumber(this);
        });
        cardNumberInput.addEventListener('keypress', function(e) {
            if (!/[0-9\s]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
    
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function() {
            formatExpiryDate(this);
        });
        expiryDateInput.addEventListener('keypress', function(e) {
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
    
    if (cvvInput) {
        cvvInput.addEventListener('keypress', function(e) {
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
});
