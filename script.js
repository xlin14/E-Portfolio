// Wait for the HTML document to finish loading
document.addEventListener("DOMContentLoaded", function() {
    

    
    // Get the current page's file name (e.g., "index.html")
    let currentPage = window.location.pathname.split('/').pop();

    // If at the root, default to index.html
    if (currentPage === "") {
        currentPage = "index.html";
    }

    // Find all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Loop through them
    navLinks.forEach(link => {
        // Get the link's href attribute
        const linkHref = link.getAttribute('href');

        // Check if the link's href matches the current page
        if (linkHref === currentPage) {
            // Add the 'active' class to the matching link
            link.classList.add('active');
        }
    });
    // --- End of active page link code ---

});