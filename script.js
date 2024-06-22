document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'all 1s ease-in-out';
            }
        });
    });
});

