document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1"; // Fade-in effect when page loads
});

// Add transition when navigating to another page
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        if (link.getAttribute("href") !== "#") {
            event.preventDefault(); // Prevent instant navigation
            document.body.classList.add("page-exit"); // Add exit animation
            
            setTimeout(() => {
                window.location.href = link.href; // Navigate after animation
            }, 300); // Adjust timing for smooth transition
        }
    });
});
