// Load navigation
fetch('components/nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
    });

// Load footer
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    }); 