// Simple form submission handling (No backend integration)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // For now, just show an alert with the form data
    alert(`Thank you, ${name}!\nWe will respond to ${email} soon.`);

    // Optionally reset the form
    event.target.reset();
});