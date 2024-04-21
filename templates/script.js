document.addEventListener("DOMContentLoaded", function () {
    // Function to scroll to a section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Event listener for About Us link
    const aboutUsLink = document.querySelector(".about-us-link");
    if (aboutUsLink) {
        aboutUsLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            scrollToSection("about-us");
        });
    }

    // Event listener for Our Services link
    const ourServicesLink = document.querySelector(".our-services-link");
    if (ourServicesLink) {
        ourServicesLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            scrollToSection("our-services");
        });
    }
});