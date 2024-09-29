const scrollContent = document.querySelector('.scroll-content');

// Dynamically adjust animation duration based on number of images
const images = scrollContent.querySelectorAll('img').length;
scrollContent.style.animationDuration = `${images * 5}s`;
