window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#5A2E0A'; /* Darker brown color */
    } else {
        navbar.style.backgroundColor = '#8B4513'; /* Original brown color */
    }
});
