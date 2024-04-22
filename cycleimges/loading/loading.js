const loadingImages = [
    'https://i.pinimg.com/736x/7c/c7/d3/7cc7d3ab1cc2928d730d5a52b7ab43fc.jpg',
    'https://i.pinimg.com/474x/38/f9/c9/38f9c92a44115eb41c411bfcfe58641b.jpg',
    'https://i.pinimg.com/236x/5c/95/a2/5c95a2e607fb6a9ab1f8b2739e9a1934.jpg',
    'https://i.pinimg.com/474x/e9/d3/61/e9d3618602725f8ce1988c902b727f92.jpg',
    'https://i.pinimg.com/236x/6f/b0/40/6fb040607c33195a656d3dd19dacf193.jpg',
    'https://i.pinimg.com/736x/7c/c7/d3/7cc7d3ab1cc2928d730d5a52b7ab43fc.jpg',
    'https://i.pinimg.com/474x/38/f9/c9/38f9c92a44115eb41c411bfcfe58641b.jpg',
    'https://i.pinimg.com/236x/5c/95/a2/5c95a2e607fb6a9ab1f8b2739e9a1934.jpg',
    'https://i.pinimg.com/474x/e9/d3/61/e9d3618602725f8ce1988c902b727f92.jpg',
    'https://i.pinimg.com/236x/6f/b0/40/6fb040607c33195a656d3dd19dacf193.jpg',
    // Add more image URLs here...
  ];
  let currentIndex = 0;
  let imagesLoaded = 0; // Counter for the number of images loaded
  const canvas = document.getElementById('loading-canvas');
  const ctx = canvas.getContext('2d');
  
  // Function to update the loading image and percentage counter
  function updateLoadingImage() {
    const img = new Image();
    img.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      imagesLoaded++; // Increment the counter when an image is loaded
      const loadingPercentage = Math.round((imagesLoaded / loadingImages.length) * 1000); // Calculate loading percentage
      drawLoadingPercentage(loadingPercentage); // Draw the loading percentage on the canvas
      if (imagesLoaded === loadingImages.length) {
        clearInterval(loadingInterval); // Stop the interval when all images are loaded
      }
    };
    const imageUrl = loadingImages[currentIndex];
    img.src = imageUrl;
    currentIndex = (currentIndex + 1) % loadingImages.length; // Move to the next image in the array
  }
  
  // Function to draw the loading percentage on the canvas
  function drawLoadingPercentage(percentage) {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Loading: ${percentage}%`, 10, 30);
  }
  
  // Update the loading image and percentage initially
  updateLoadingImage();
  
  // Rotate through loading images every 2 seconds (adjust as needed)
//   const loadingInterval = setInterval(updateLoadingImage, 100);
  
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Website is fully loaded.');
// });