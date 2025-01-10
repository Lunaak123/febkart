document.addEventListener('DOMContentLoaded', () => {
    const fadeLayer = document.getElementById('fade-layer');
    const cartButton = document.getElementById('cart-button');
  
    // Remove the fade layer when the cart button is clicked
    cartButton.addEventListener('click', () => {
      fadeLayer.style.display = 'none';
    });
  });
  document.getElementById('cart-button').addEventListener('click', () => {
    window.location.href = 'order/index.html'; // Replace 'cart.html' with your target page
  });
    