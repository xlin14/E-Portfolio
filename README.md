
# Personal Portfolio Website 

This repository contains the source code for a 4-page personal portfolio website for Xin Lin, a Graphic Design student. The site is built from scratch using HTML, CSS, and JavaScript, focusing on a clean, modern, and professional design that is easy to maintain and update.

-----

## Features

  * **Multi-Page Structure:** A complete static site with four distinct pages:
      * **About Me:** A personal introduction.
      * **Education:** Details on academic background.
      * **Experience:** A placeholder for future projects and work history.
      * **Contact:** Contact information with `mailto:` and `tel:` links.
  * **Modern CSS Styling:**
      * **CSS Variables:** The `style.css` file uses a `:root` declaration for a global color palette (e.g., `var(--color-background)`, `var(--color-accent-purple)`), making it simple to re-theme the entire site.
      * **Clean Layout:** A "card" based UI for the main content, with a consistent header and footer across all pages.
  * **Dynamic Navigation:**
      * The `script.js` file automatically detects the current page the user is on.
      * It then dynamically adds an `.active` class to the corresponding link in the navigation bar, providing clear visual feedback to the user.
  * **Responsive-Ready:** The HTML includes a `.menu-button` (hamburger icon), setting the foundation for a mobile-friendly responsive design.

-----

## File Structure

Here is a brief overview of the key files and their purpose:

```
.
├── index.html       // The "About Me" (homepage)
├── education.html   // The "Education" page
├── experience.html  // The "Experience" page
├── contact.html     // The "Contact" page
├── style.css        // All visual styling for the website
└── script.js        // JavaScript for all interactivity
```

-----

## Technologies Used

  * **HTML5:** For the core content and structure.
  * **CSS3:** For all styling, layout, fonts, and colors.
  * **JavaScript (ES6+):** For DOM manipulation (specifically, highlighting the active navigation link).

-----

## How to Use

To view or use this website, no special build steps are required.

1.  **Clone or Download:** Get a local copy of the repository.
2.  **Open in Browser:** Simply open any of the `.html` files (e.g., `index.html`) in your preferred web browser to view the site.
3.  **Edit:** You can edit the content by modifying the `.html` files and change the design by updating `style.css`.