document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic Project Detail Modal (Example - you'd expand this for actual content)
    const projectDetailButtons = document.querySelectorAll('.project-detail-btn');

    projectDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.project;
            alert(`Showing details for project: ${projectId}\n\n(This would open a modal with detailed case study content in a real application.)`);
            // In a real application, you would:
            // 1. Create a modal element if it doesn't exist
            // 2. Populate the modal with content based on projectId
            // 3. Display the modal
        });
    });

    // Contact Form Submission (Example - client-side validation and placeholder for server-side)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Basic client-side validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields (Name, Email, Message).');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // In a real application, you would send this data to a server
            console.log('Form Submitted:', {
                name: name,
                email: email,
                subject: document.getElementById('subject').value.trim(),
                message: message
            });

            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});