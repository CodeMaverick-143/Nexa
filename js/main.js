document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    new ParticleBackground();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        document.querySelector('.hero').style.transform = `translateY(${scroll * 0.5}px)`;
    });
}); 