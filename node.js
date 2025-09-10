const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let orders = []; // Store orders

// Example route to receive the order from the form
app.post('/order', (req, res) => {
    const { productId, fullName, email, address } = req.body;

    const newOrder = {
        id: orders.length + 1,
        productId,
        fullName,
        email,
        address,
        status: 'Pending' // Example order status
    };

    orders.push(newOrder);

    res.json({ message: 'Order received successfully', order: newOrder });
});

// Example route to handle payment processing (simplified)
app.post('/payment', (req, res) => {
    // Here, you would handle payment processing logic (e.g., using PayPal or Stripe)
    res.json({ message: 'Payment processed successfully' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
npm install nodemailer
const nodemailer = require('nodemailer');

// Setup Nodemailer transporter (using Gmail SMTP as an example)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    }
});

// Function to send confirmation email
function sendConfirmationEmail(order) {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: order.email,
        subject: `Order Confirmation - Product: ${order.productName}`,
        text: `
            Thank you for your purchase, ${order.fullName}!

            Order Details:
            Product: ${order.productName}
            Price: $${order.price}
            Shipping Address: ${order.address}

            Your order will be shipped soon. We'll notify you when it's on its way.

            Thank you for shopping with us!
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
