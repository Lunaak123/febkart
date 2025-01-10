let clickCount = 0;
const giftImage = document.getElementById('gift-image');
const giftText = document.getElementById('gift-text');
const heartShower = document.getElementById('heart-shower');
let heartShowerInterval;

// Handle click events
giftImage.addEventListener('click', () => {
  clickCount++;

  // First and second clicks: shake the image
  if (clickCount === 1 || clickCount === 2) {
    giftImage.classList.add('shake');
    
    setTimeout(() => {
      giftImage.classList.remove('shake');
    }, 500); // Duration of the shake animation
  }

  // Third click: Flash effect and transition to another image
  if (clickCount === 3) {
    giftImage.classList.add('flash');
    
    // Create the new image (opened gift)
    const newImage = document.createElement('img');
    newImage.src = 'opened.png'; // Replace with the actual image path
    newImage.alt = 'Opened Gift';
    newImage.classList.add('transition-image');
    
    // Append the new image
    giftImage.parentNode.appendChild(newImage);
    
    // Wait for the flash effect to complete, then show the new image
    setTimeout(() => {
      giftImage.style.display = 'none'; // Hide the gift image
      newImage.style.display = 'block'; // Show the opened gift image

      // Change text to "They ordered 1000 hearts for you"
      giftText.textContent = "They ordered 1000 hearts for you and they all time beats your name";

      // Show heart image
      const heartImage = document.createElement('img');
      heartImage.src = 'heart.png'; // Replace with actual heart image path
      heartImage.alt = 'Heart Image';
      heartImage.classList.add('heart-image');

      // Append the heart image below the text
      giftText.parentNode.appendChild(heartImage);

      // Make the heart image visible
      setTimeout(() => {
        heartImage.style.display = 'block';
      }, 500); // Wait for a while before showing heart image

      // Start the heart shower when the heart image appears
      heartShower.style.display = 'block'; // Show the heart shower
      heartShowerInterval = setInterval(createHeart, 200); // Start creating hearts
    }, 1000); // Flash effect duration
  }
});

// heart showering
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Set random position and animation duration
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const size = Math.random() * 30 + 20;

    heart.style.left = `${left}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDelay = `${delay}s`;

    heartShower.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
