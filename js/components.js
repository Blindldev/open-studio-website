document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    fetch('/open-studio-website/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            // Initialize mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error loading navigation:', error));

    // Load footer
    fetch('/open-studio-website/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}); 