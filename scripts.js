// Handle Transaction Request Form Submission
document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the transaction details
    const transactionType = document.getElementById('transaction-type').value;
    const transactionAmount = document.getElementById('transaction-amount').value;
    const transactionMessage = document.getElementById('transaction-message').value;

    // Simulate a transaction request
    alert(`Transaction Requested!\nType: ${transactionType}\nAmount: ${transactionAmount}\nMessage: ${transactionMessage}`);

    // Optionally reset the form
    event.target.reset();
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the contact details
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Simulate sending the contact message
    alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Optionally reset the form
    event.target.reset();
});
