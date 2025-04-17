// Load navigation
fetch('components/nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
        
        // Add event listener for mobile menu toggle after nav is loaded
        const menuToggle = document.querySelector('#mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const navbar = document.querySelector('.navbar');
        
        // Image mapping based on current page
        const pageToImageMap = {
            'firing.html': 'G1',
            'members.html': 'G2',
            'rules.html': 'G3',
            'faq.html': 'G4',
            'about.html': 'G5',
            'index.html': 'G8'
        };
        
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLogo = document.querySelector('#nav-logo');
        
        if (navLogo) {
            // Set the appropriate image based on current page
            const imageNumber = pageToImageMap[currentPage] || 'G1';
            navLogo.src = `images/${imageNumber}.png`;
            
            // Add hover effect to cycle through images
            let currentIndex = 1;
            navLogo.addEventListener('mouseenter', () => {
                const interval = setInterval(() => {
                    currentIndex = currentIndex % 7 + 1;
                    navLogo.src = `images/G${currentIndex}.png`;
                }, 500);
                
                navLogo.addEventListener('mouseleave', () => {
                    clearInterval(interval);
                    const imageNumber = pageToImageMap[currentPage] || 'G1';
                    navLogo.src = `images/${imageNumber}.png`;
                }, { once: true });
            });
        }
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
                navbar.classList.toggle('menu-open');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                    navbar.classList.remove('menu-open');
                }
            });

            // Close menu when clicking on a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                    navbar.classList.remove('menu-open');
                });
            });
        }
    });

// Load footer
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    }); 