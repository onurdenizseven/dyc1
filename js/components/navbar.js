document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
    }

    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    // Menü dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-container') && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Link tıklamalarında menüyü kapat
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    });
}); 