// Add event listeners for the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.cake button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const cake = event.target.closest('.cake');
    const cakeName = cake.querySelector('h3').innerText;
    const cakePrice = cake.querySelector('p').innerText;

   
}
// Initialize the cart as an empty array
let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            // Add the item to the cart array
            cart.push({ name, price });

            // Display a confirmation message on the page
            displayConfirmationMessage(name, calculateTotal());
        });
    });
});
// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total.toFixed(2); // Ensure total is formatted with 2 decimal places
}


    let click = [];

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            // Add the item to the cart array
            cart.push({ name, price });

            // Display a confirmation message on the page
            displayConfirmationMessage(name, calculateTotal());

            // Update the cart icon with the number of items in the cart
            updateCartIcon();
        });
    });
});

// Function to calculate the total price of items in the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// Function to display a confirmation message on the page
function displayConfirmationMessage(itemName, total) {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = `Added ${itemName} to cart. Total: $${total}`;
    confirmationMessage.classList.add('confirmation-message');

    // Append the message to the main content area
    document.body.appendChild(confirmationMessage);

    // Remove the message after a certain time (e.g., 3 seconds)
    setTimeout(() => {
        confirmationMessage.remove();
    }, 3000); // Message will disappear after 3 seconds
}

// Function to update the cart icon with the number of items in the cart
function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.textContent = cart.length > 0 ? cart.length : '';
}


